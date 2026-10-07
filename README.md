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

Do not add student IDs, school-email addresses containing IDs, roster PDFs, or
ID-derived lookup tables to this public repository. Name search is intentional:
an ID lookup would need a private backend rather than a public static dataset.
