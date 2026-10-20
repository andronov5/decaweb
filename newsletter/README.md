# Newsletter signup setup

Prepared October 20, 2026. The `newsletter-signup` branch is not ready for
publication until the receiver is deployed and the live submission test passes.

The page lives at `/join-newsletter/`. It is omitted from navigation and has
`noindex, nofollow` metadata. This makes it unlisted, not access restricted.
The existing site domain in CNAME is `northfielddeca.org`; confirm the requested
`.com` domain before producing the final event QR code. Do not modify CNAME
unless a domain migration is explicitly requested.

## Connect the response sheet

1. In the private newsletter spreadsheet, open **Extensions > Apps Script**.
2. Paste `google-sheets.gs` into the bound project and save.
3. Run `setup` to bind the existing `Signups` tab. Authorize access to this
   spreadsheet using its owner's account.
4. Deploy a new web app: **Execute as: Me**, **Who has access: Anyone**.
   The receiver accepts submissions but never returns subscriber data.
   Keep the spreadsheet's sharing restricted.
5. Put the resulting `/exec` URL into the `endpoint` constant in
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
