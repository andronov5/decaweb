# Northfield DECA

Static website served by GitHub Pages at northfielddeca.org.

## Officer groups

The About page contains the 2026–2027 officer groups from the October 6 supplied
Officer Groups PDF, reconciled against the chapter roster. The directory has
143 members in 11 groups and one tentative assignment. One additional roster
member awaiting an assignment remains searchable without a separate visible list.
Keep tentative labels until an officer confirms them.

Edit the group lists in `about/index.html` to update assignments. Member names
and `data-search` aliases are the source for the progressive name-search feature
in `about/officer-groups.js`; the lists also work with JavaScript disabled.
Officer cards link to the existing profiles. Styling is isolated in
`about/officer-groups.css`.

Search also accepts common first-name nicknames defined in `nicknameFamilies`
in `about/officer-groups.js`, including Joe/Joseph, Max/Maxwell or Maximilian,
and Abby/Abbey/Abigail. Nicknames can be combined with a surname. Exact names
rank ahead of nickname matches, and results always display the listed member
name. Add individual preferred names to `data-search`; common nicknames do not
expand surnames or change the roster.

The 11 officer profiles display their school email addresses, as explicitly
requested by the site owner on October 8, 2026, using the supplied chapter roster.
These contact links are maintained in the `officers` array in `script.js`.
Keep this exception limited to the officer contact addresses: do not add other
member email addresses, standalone student IDs, roster PDFs, or ID-derived lookup
tables to this public repository. Name search is intentional: an ID lookup would
need a private backend rather than a public static dataset.
