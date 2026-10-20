// Bind this script to the private newsletter spreadsheet, run setup(), and
// deploy as a web app executing as its owner with access set to Anyone.
// No endpoint reads or exposes subscriber data.
function setup() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  if (!book || !book.getSheetByName('Signups')) {
    throw new Error('Open this script from the newsletter spreadsheet.');
  }
  PropertiesService.getScriptProperties().setProperty('NEWSLETTER_SHEET_ID', book.getId());
  book.setSpreadsheetTimeZone('America/Denver');
}

function doGet() {
  return reply_({ok: true, service: 'Northfield DECA newsletter'});
}

function validateSignup_(raw) {
  if (typeof raw !== 'string' || raw.length > 2000) throw new Error('Invalid request');
  var data = JSON.parse(raw);
  if (!data || typeof data.email !== 'string') throw new Error('Invalid email');
  var email = data.email.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid email');
  }
  return {email: email, spam: Boolean(data.website)};
}

function doPost(e) {
  var lock;
  try {
    var signup = validateSignup_(e && e.postData && e.postData.contents);
    // Ignore the honeypot without revealing it to automated form fillers.
    if (signup.spam) return reply_({ok: true});
    var sheetId = PropertiesService.getScriptProperties().getProperty('NEWSLETTER_SHEET_ID');
    if (!sheetId) throw new Error('Run setup first');
    lock = LockService.getScriptLock();
    lock.waitLock(10000);
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Signups');
    if (!sheet) throw new Error('Signups tab missing');
    var lastRow = sheet.getLastRow();
    var duplicate = lastRow > 1 && sheet.getRange(2, 1, lastRow - 1, 1)
      .createTextFinder(signup.email).matchEntireCell(true).matchCase(false)
      .useRegularExpression(false).findNext();
    // Identical response for existing and new addresses; safe to retry.
    if (duplicate) return reply_({ok: true});
    if (lastRow >= 50001) throw new Error('Signup limit reached');
    var nextRow = lastRow + 1;
    if (nextRow > sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(), 500);
    // Leading apostrophe forces literal text, including emails beginning with =.
    sheet.getRange(nextRow, 1, 1, 3).setValues([[
      "'" + signup.email, new Date(), 'Website newsletter signup'
    ]]);
    sheet.getRange(nextRow, 2).setNumberFormat('mmm d, yyyy h:mm AM/PM');
    SpreadsheetApp.flush();
    return reply_({ok: true});
  } catch (error) {
    // Do not expose addresses, spreadsheet metadata, or internal error details.
    return reply_({ok: false});
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function reply_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
