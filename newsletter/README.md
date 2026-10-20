# Newsletter signup setup

Updated October 20, 2026. The signup page and newsletter receiver are live.
A production browser submission and a case-varied duplicate were verified
against the response sheet. Both reserved test addresses have been removed.

The page lives at `/join-newsletter/`. It is omitted from navigation and has
`noindex, nofollow` metadata. This makes it unlisted, not access restricted.
The confirmed signup URL is `https://northfielddeca.org/join-newsletter/`.
Keep the existing `northfielddeca.org` CNAME unchanged.

## Connect the response sheet

1. In the private newsletter spreadsheet, open **Extensions > Apps Script**.
2. Paste `google-sheets.gs` into the bound project and save.
3. Run `setup` to bind the existing `Signups` tab. Authorize using its owner's
   account. The receiver requires the full spreadsheets scope because web-app
   execution uses `openById`; do not add `@OnlyCurrentDoc`.
4. Deploy a new web app: **Execute as: Me**, **Who has access: Anyone**.
   The receiver accepts submissions but never returns subscriber data.
   Keep the spreadsheet's sharing restricted.
5. Put the resulting `/exec` URL into the `NEWSLETTER_ENDPOINT` constant in
   `join-newsletter/index.html`.
6. Test a new address and a duplicate; confirm the sheet has one row. Test a
   failed request and confirm the page shows a retry message, not success.
   Clear the test row through the Sheets connector after verification.
7. Publish the branch and verify the actual public URL before sharing its QR.

The sheet contains Email, Submitted at (Denver time), and Source. Addresses are
trimmed, normalized to lowercase, and deduplicated. Writes are serialized and
stored as literal text. The form checks the receiver's JSON acknowledgment;
it never treats an opaque `no-cors` response as confirmed enrollment.

This collects the newsletter list; it does not send newsletter emails.
