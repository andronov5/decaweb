(() => {
  'use strict';
  // Activate only after deploying the bound Google Apps Script web app.
  const endpoint = 'https://script.google.com/macros/s/AKfycbznq7ix38JHvHKkqusdziHvTziq7EnpKkZXTY1qmVcCcjtIOFPiKyEcbqL7jGW74-Ag8A/exec';
  let round = null;
  const enabled = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint);

  function send(payload) {
    if (!enabled) return;
    try {
      fetch(endpoint, {
        method: 'POST', mode: 'no-cors', credentials: 'omit',
        referrerPolicy: 'no-referrer', keepalive: true,
        headers: {'Content-Type': 'text/plain;charset=UTF-8'},
        body: JSON.stringify(payload)
      }).catch(() => {});
    } catch (_) { /* A logging failure must never interrupt a game. */ }
  }

  window.decaVocabActivity = {
    start(category) {
      round = null;
      if (!enabled) return;
      try {
        round = {roundId: crypto.randomUUID(), startedAt: new Date().toISOString(), category};
        send({...round, action: 'started'});
      } catch (_) { round = null; }
    },
    finish(result) {
      if (!round) return;
      const completed = round;
      round = null;
      send({...completed, action: 'finished', ...result});
    }
  };
})();
