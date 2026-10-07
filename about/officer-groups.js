(() => {
  "use strict";

  const section = document.getElementById("officer-groups");
  if (!section) return;

  const input = section.querySelector("#memberSearch");
  const clear = section.querySelector("#clearMemberSearch");
  const results = section.querySelector("#groupSearchResults");
  const status = section.querySelector("#groupSearchStatus");
  const expand = section.querySelector("#expandOfficerGroups");
  const groups = [...section.querySelectorAll(".og-group")];

  // Search only the published member names. Never load, request, or store IDs.
  const normalize = value => value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

  const members = [...section.querySelectorAll("[data-member-name]")].map(item => ({
    name: item.dataset.memberName,
    search: normalize(item.dataset.search),
    tentative: item.dataset.tentative === "true",
    item,
    group: item.closest(".og-group")
  }));

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function resultCard(member) {
    const card = element("article", "og-result");
    const heading = element("div", "og-result-member");
    heading.append(element("strong", "", member.name));
    card.append(heading);

    if (!member.group) {
      heading.append(element("span", "og-tag", "Assignment pending"));
      card.append(element("p", "og-pending-message", "You’re on the roster, but your officer group isn’t listed yet. Please check with an officer at the next meeting."));
      return card;
    }

    if (member.tentative) {
      heading.append(element("span", "og-tag", "Confirm with officer"));
    }

    const info = member.group.dataset;
    const leader = element("div", "og-leader");
    const photo = element("img", "");
    photo.src = info.officerPhoto;
    photo.alt = "";
    photo.width = 56;
    photo.height = 56;
    const bio = element("div", "");
    bio.append(
      element("p", "og-eyebrow", member.tentative ? "Proposed officer leader" : "Your officer leader"),
      element("h4", "", info.officerName),
      element("p", "", info.officerRole)
    );
    leader.append(photo, bio);
    card.append(leader);

    const actions = element("div", "og-result-actions");
    const profile = element("a", "", "View officer profile ↗");
    profile.href = info.officerProfile;
    const viewGroup = element("a", "", "View your group ↓");
    viewGroup.href = `#${member.group.id}`;
    viewGroup.addEventListener("click", event => {
      event.preventDefault();
      section.querySelectorAll(".is-match").forEach(item => item.classList.remove("is-match"));
      member.item.classList.add("is-match");
      member.group.open = true;
      const summary = member.group.querySelector("summary");
      summary.focus({ preventScroll: true });
      member.group.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start"
      });
    });
    actions.append(profile, viewGroup);
    card.append(actions);
    return card;
  }

  function search() {
    const query = normalize(input.value);
    results.replaceChildren();
    clear.hidden = input.value.length === 0;
    if (query.length < 2) {
      status.textContent = query ? "Type at least 2 letters to search." : "";
      return;
    }
    // Do not encourage entry of student IDs into a public name search.
    if (/\d/.test(query)) {
      status.textContent = "Please search with your name, not your student ID.";
      return;
    }
    const words = query.split(/\s+/);
    const matches = members.filter(member => words.every(word => member.search.includes(word)))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (!matches.length) {
      status.textContent = "No match yet. Try your first or last name, browse the groups below, or check with an officer at the next meeting.";
      return;
    }
    const visible = matches.slice(0, 12);
    status.textContent = matches.length > 12
      ? `${matches.length} names match. Showing the first 12; add more of your name to narrow the results.`
      : `${matches.length} ${matches.length === 1 ? "member matches" : "members match"} your search.`;
    results.append(...visible.map(resultCard));
  }

  let timer;
  input.addEventListener("input", () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(search, 120);
  });
  section.querySelector("#officerSearchForm").addEventListener("submit", event => {
    event.preventDefault();
    window.clearTimeout(timer);
    search();
  });
  clear.addEventListener("click", () => {
    window.clearTimeout(timer);
    input.value = "";
    search();
    input.focus();
  });

  function syncExpandButton() {
    const allOpen = groups.every(group => group.open);
    expand.textContent = allOpen ? "Collapse all groups" : "Expand all groups";
    expand.setAttribute("aria-expanded", String(allOpen));
  }
  expand.setAttribute("aria-controls", groups.map(group => group.id).join(" "));
  expand.addEventListener("click", () => {
    const shouldOpen = !groups.every(group => group.open);
    groups.forEach(group => { group.open = shouldOpen; });
    syncExpandButton();
  });
  groups.forEach(group => group.addEventListener("toggle", syncExpandButton));

  function openLinkedGroup() {
    const group = groups.find(item => `#${item.id}` === window.location.hash);
    if (group) group.open = true;
  }
  window.addEventListener("hashchange", openLinkedGroup);
  openLinkedGroup();
  section.querySelector("#officerFinder").hidden = false;
  expand.hidden = false;
})();
