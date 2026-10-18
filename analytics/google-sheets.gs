// Paste into Extensions > Apps Script in the private activity spreadsheet.
// Run setup once, then deploy as a web app: Execute as Me, access Anyone.
function setup() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  if (!book || !book.getSheetByName('Plays')) throw new Error('Open this script from the activity spreadsheet.');
  PropertiesService.getScriptProperties().setProperty('ACTIVITY_SHEET_ID', book.getId());
  book.setSpreadsheetTimeZone('America/Denver');
}

function doGet() {
  return ContentService.createTextOutput('DECA activity receiver');
}

function validateEvent_(raw, now) {
  if (typeof raw !== 'string' || raw.length > 2000) throw new Error('Invalid payload');
  var p = JSON.parse(raw);
  if (!p || !['started', 'finished'].includes(p.action)) throw new Error('Invalid action');
  if (typeof p.roundId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(p.roundId)) throw new Error('Invalid round');
  var categories = ['all', 'Marketing', 'Finance', 'Hospitality and Tourism', 'Business Management & Administration', 'Entrepreneurship'];
  if (!categories.includes(p.category)) throw new Error('Invalid category');
  var started = new Date(p.startedAt);
  if (typeof p.startedAt !== 'string' || !Number.isFinite(started.getTime()) || started > new Date(now.getTime() + 300000) || started < new Date(now.getTime() - 30 * 86400000)) throw new Error('Invalid time');
  if (p.action === 'finished') {
    ['score', 'correct', 'answered', 'maxStreak'].forEach(function(key) {
      if (!Number.isInteger(p[key]) || p[key] < 0 || p[key] > 10000) throw new Error('Invalid result');
    });
    if (p.correct > p.answered || p.maxStreak > p.correct || p.score !== p.correct * 10) throw new Error('Invalid score');
    if (!['Time expired', 'Ended early'].includes(p.reason)) throw new Error('Invalid reason');
  }
  p.started = started;
  return p;
}

function doPost(e) {
  var lock;
  try {
    var now = new Date();
    var p = validateEvent_(e && e.postData && e.postData.contents, now);
    var sheetId = PropertiesService.getScriptProperties().getProperty('ACTIVITY_SHEET_ID');
    if (!sheetId) throw new Error('Run setup first');
    lock = LockService.getScriptLock();
    lock.waitLock(10000);
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Plays');
    var lastRow = sheet.getLastRow();
    var match = lastRow > 1 ? sheet.getRange(2, 11, lastRow - 1, 1).createTextFinder(p.roundId).matchEntireCell(true).findNext() : null;
    var row = match ? match.getRow() : lastRow + 1;
    // Retry-safe: late starts cannot downgrade finished rounds.
    if (match && (p.action === 'started' || sheet.getRange(row, 3).getValue() === 'Finished')) return reply_(true);
    if (row > 50001) throw new Error('Log full');
    if (row > sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(), 1000);
    var finished = p.action === 'finished';
    sheet.getRange(row, 1, 1, 11).setValues([[
      p.started, finished ? now : '', finished ? 'Finished' : 'Started',
      p.category === 'all' ? 'All clusters' : p.category,
      finished ? p.score : '', finished ? p.correct : '', finished ? p.answered : '',
      finished && p.answered ? p.correct / p.answered : '',
      finished ? p.maxStreak : '', finished ? p.reason : '', p.roundId
    ]]);
    sheet.getRange(row, 1, 1, 2).setNumberFormat('mm/dd/yy h:mm AM/PM');
    sheet.getRange(row, 8).setNumberFormat('0.0%');
    return reply_(true);
  } catch (error) {
    // No spreadsheet contents or error details are exposed to callers.
    return reply_(false);
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function reply_(ok) {
  return ContentService.createTextOutput(JSON.stringify({ok: ok})).setMimeType(ContentService.MimeType.JSON);
}
