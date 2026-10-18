# Private vocab activity setup

Status: receiver deployed and website endpoint configured on October 18, 2026.

The private Google Sheet has Overview and Plays tabs. It records anonymous
rounds, not people. A fresh random ID is generated for every round; no player
name, email, cookies, persistent identifier, or browser details are sent by
the game. There is no public stats page.

## One-time Google setup

1. Open the private activity Sheet and choose **Extensions > Apps Script**.
2. Replace the starter code with `google-sheets.gs` from this folder and save.
3. Select **setup**, click **Run**, and authorize it with the Sheet owner's account.
   This binds the receiver to this Sheet without publishing its ID in website code.
4. Choose **Deploy > New deployment > Web app**. Set **Execute as: Me** and
   **Who has access: Anyone**, then deploy. Keep the Sheet's sharing **Restricted**.
   Public access is only for this write-only receiver; it never returns Sheet data.
5. Copy the deployed URL ending in `/exec` into `endpoint` in
   `resources/vocab-tracking.js`. Publish the prepared website changes.
6. Play and finish one round from the live Resources page. Confirm that Plays
   contains one row updated to Finished with the matching results. Delete this
   test row and change Overview A3 to `Tracking active` after verification.

Google's authorization step must be completed by the owner. If Google Workspace
does not offer Anyone access, the receiver cannot accept anonymous players;
do not change the Sheet to public as a workaround.

## How to read the log

- Started is a begun round; Finished means the player reached the results screen,
  either by time expiring or by ending early.
- Closing the page mid-round leaves it Started. Pausing does not create new rounds.
- Times display in Denver time. Scores and accuracy summarize finished rounds.
- Counts are approximate: offline browsers or blocked requests can be missed;
  anonymous public submissions cannot prove unique people or prevent fabricated plays.
- The receiver validates values, serializes writes, and deduplicates round IDs.
  It accepts up to 50,000 rounds, matching the Overview formulas.
- The Google Sheet remains private. Google still handles incoming requests under
  its service policies; the app does not put request metadata into the Sheet.

To stop collecting, remove the endpoint and republish, or archive the Apps Script
deployment. To change receiver code, update its deployment to a new version.
