const officers = [
  {
    id: "scarlett-tolan",
    firstName: "scarlett",
    name: "Scarlett Tolan",
    role: "President",
    smallImage: "/scarlettsmall.jpg",
    bigImage: "/scarlettbig.JPEG",
    funFact: "I love Stranger Things",
    memory: "ICDC in Atlanta",
    excited: "Senior sunrise!"
  },
  {
    id: "will-zhang",
    firstName: "will",
    name: "Will Zhang",
    role: "Vice President",
    smallImage: "/willsmall.jpg",
    bigImage: "/willbig.jpg",
    funFact: "Iâ€™ve gotten bit by a snake",
    memory: "Getting ice cream in Atlanta",
    excited: "Helping people qualify for State!"
  },
  {
    id: "ava-lonigro",
    firstName: "ava",
    name: "Ava Lonigro",
    role: "VP of Marketing",
    smallImage: "/avasmall.jpg",
    bigImage: "/avabig.JPEG",
    funFact: "I am a huge Avs fan",
    memory: "Six Flags during ICDC in Atlanta!",
    excited: "Senior-y things and prom!"
  },
  {
    id: "isabelle-brehm",
    firstName: "isabelle",
    name: "Isabelle Brehm",
    role: "VP of Finance",
    smallImage: "/isabellesmall.jpg",
    bigImage: "/isabellebig.JPG",
    funFact: "I want to go to med school",
    memory: "Running to last roller coaster at Six Flags",
    excited: "Going to State"
  },
  {
    id: "demi-dolechek",
    firstName: "demi",
    name: "Demi Dolechek",
    role: "VP of Community Outreach",
    smallImage: "/demismall.jpg",
    bigImage: "/demibig.jpg",
    funFact: "I can juggle",
    memory: "Trading pins at ICDC",
    excited: "Districts with incoming freshmen"
  },
  {
    id: "mimi-haile",
    firstName: "mimi",
    name: "Mimi Haile",
    role: "VP of Operations",
    smallImage: "/mimismall.jpg",
    bigImage: "/mimibig.JPG",
    funFact: "Iâ€™m really good at puzzles",
    memory: "ICDC in Atlanta",
    excited: "Seeing new faces!"
  },
  {
    id: "owen-huie",
    firstName: "owen",
    name: "Owen Huie",
    role: "Junior President",
    smallImage: "/owensmall.jpg",
    bigImage: "/owenbig.jpg",
    funFact: "I have been to 8 countries!",
    memory: "Six Flags Rollercoasters at ICDC!",
    excited: "Being a part of DECA leadership!"
  },
  {
    id: "lera-andronova",
    firstName: "lera",
    name: "Lera Andronova",
    role: "Junior Vice President",
    smallImage: "/lerasmall.jpg",
    bigImage: "/lerabig.jpg",
    funFact: "I speak Russian",
    memory: "Winning state champion",
    excited: "Districts with freshmen!"
  },
  {
    id: "lila-rowley",
    firstName: "lila",
    name: "Lila Rowley",
    role: "Junior VP of Marketing",
    smallImage: "/lilasmall.jpg",
    bigImage: "/lilabig.jpg",
    funFact: "I know how to surf!",
    memory: "State 2025!",
    excited: "Being a DECA officer and prom!"
  },
  {
    id: "maddie-ng",
    firstName: "maddie",
    name: "Maddie Ng",
    role: "Junior VP of Finance",
    smallImage: "/maddiesmall.jpg",
    bigImage: "/maddiebig.jpg",
    funFact: "I can type over 100 words per minute!",
    memory: "Sophomore year State with friends!",
    excited: "Having an off period!"
  },
  {
    id: "keira-mccord",
    firstName: "keira",
    name: "Keira McCord",
    role: "Junior VP of Community Outreach",
    smallImage: "/keirasmall.jpg",
    bigImage: "/keirabig.jpg",
    funFact: "I am left-handed!",
    memory: "Finalizing at State!",
    excited: "Prom and DECA!"
  }
];

const events = [
  {
    date: "2026-09-03",
    title: "Club Fair",
    subtitle: "At lunch in the Quad"
  },
  {
    date: "2026-09-04",
    title: "Interest Meeting",
    subtitle: "At lunch in the Main Gym"
  },
  {
    date: "2026-09-09",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-09-16",
    title: "DECA Test Day & Applications Due",
    subtitle: "Business Hallway (B2)"
  },
  {
    date: "2026-09-21",
    title: "Official DECA Roster Posted"
  },
  {
    date: "2026-09-23",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-09-30",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-10-07",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-10-14",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-10-21",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-10-28",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-11-04",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-11-11",
    title: "DECA Meeting",
    subtitle: "At lunch in the Business Hallway (B2)"
  },
  {
    date: "2026-11-18",
    title: "DECA Districts",
    subtitle: "All day Â· Location TBD"
  }
];

/*
  Announcement logistics:
  - Add new posts to this array.
  - Homepage cards render automatically from this data.
  - Each card opens /post/?id=POST_ID.
  - For deadline posts, use category: "Deadline" and add a clear date in the title/preview/body.
*/
const announcements = [
  {
    id: "welcome-to-northfield-deca",
    title: "Welcome to the 2026â€“2027 DECA Year",
    category: "General",
    date: "June 2, 2026",
    preview: "We are preparing for another year of competition, leadership, and chapter events.",
    body: "Welcome to Northfield DECA! This website will be used as a chapter hub for upcoming dates, announcements, resources, officer information, and important reminders. Check back here throughout the year for meeting information, competition deadlines, and chapter updates.",
    link: "/join/",
    linkText: "Join DECA"
  },
  {
    id: "club-fair-august-28",
    title: "Club Fair is August 28",
    category: "Event",
    date: "August 28, 2026",
    preview: "Stop by the DECA table to meet officers and learn how to get involved.",
    body: "Northfield DECA will be at the Club Fair on August 28, 2026. This is a great chance for new members to ask questions, learn what DECA is, and find out how to join the chapter.",
    link: "/join/",
    linkText: "How to Join"
  },
  {
    id: "first-meeting-coming-soon",
    title: "First Meeting Details Coming Soon",
    category: "Meeting",
    date: "TBD",
    preview: "Our first official meeting will be posted here once the date is finalized.",
    body: "The first Northfield DECA meeting date is still TBD. Once it is finalized, this announcement can be updated with the meeting date, location, what new members should bring, and any important links.",
    link: "/join/",
    linkText: "Join the Chapter"
  }
];

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const eventContainer = document.getElementById("eventContainer");
const eventListView = document.getElementById("eventListView");
const eventCalendarView = document.getElementById("eventCalendarView");
const calendarGrid = document.getElementById("calendarGrid");
const calendarNavigation = document.getElementById("calendarNavigation");
const calendarMonthLabel = document.getElementById("calendarMonthLabel");
const calendarPrevious = document.getElementById("calendarPrevious");
const calendarNext = document.getElementById("calendarNext");
const calendarToday = document.getElementById("calendarToday");
const noUpcomingEvents = document.getElementById("noUpcomingEvents");
const calendarViewButtons = document.querySelectorAll("[data-calendar-view]");

function dateFromISO(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateToISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function datesMatch(firstDate, secondDate) {
  return firstDate.getFullYear() === secondDate.getFullYear()
    && firstDate.getMonth() === secondDate.getMonth()
    && firstDate.getDate() === secondDate.getDate();
}

function formattedEventDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(dateFromISO(dateString));
}

const today = new Date();
today.setHours(0, 0, 0, 0);
let visibleCalendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);

function renderEventList() {
  if (!eventContainer || !noUpcomingEvents) return;

  eventContainer.innerHTML = "";

  const upcomingEvents = events.filter(event => dateFromISO(event.date) >= today);
  noUpcomingEvents.hidden = upcomingEvents.length > 0;

  upcomingEvents.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <time class="event-date" datetime="${event.date}">${formattedEventDate(event.date)}</time>
      <div class="event-details">
        <h3>${event.title}</h3>
        ${event.subtitle ? `<p>${event.subtitle}</p>` : ""}
      </div>
    `;

    eventContainer.appendChild(card);
  });
}

function renderMonthCalendar() {
  if (!calendarGrid || !calendarMonthLabel) return;

  const year = visibleCalendarMonth.getFullYear();
  const month = visibleCalendarMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const gridStartDate = new Date(year, month, 1 - firstDayOfMonth.getDay());

  calendarMonthLabel.textContent = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(visibleCalendarMonth);

  calendarGrid.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const cellDate = new Date(
      gridStartDate.getFullYear(),
      gridStartDate.getMonth(),
      gridStartDate.getDate() + index
    );
    const cellDateISO = dateToISO(cellDate);
    const eventsOnDate = events.filter(event => event.date === cellDateISO);
    const dayCell = document.createElement("div");

    dayCell.className = "calendar-day";
    dayCell.setAttribute("role", "gridcell");
    dayCell.setAttribute("aria-label", `${formattedEventDate(cellDateISO)}${eventsOnDate.length ? `, ${eventsOnDate.length} event${eventsOnDate.length === 1 ? "" : "s"}` : ""}`);

    if (cellDate.getMonth() !== month) {
      dayCell.classList.add("outside-month");
    }

    if (datesMatch(cellDate, today)) {
      dayCell.classList.add("today");
    }

    const dayNumber = document.createElement("time");
    dayNumber.className = "calendar-day-number";
    dayNumber.dateTime = cellDateISO;
    dayNumber.textContent = cellDate.getDate();
    dayCell.appendChild(dayNumber);

    eventsOnDate.forEach(event => {
      const eventChip = document.createElement("div");
      eventChip.className = "calendar-event-chip";
      eventChip.textContent = event.title;
      eventChip.title = event.subtitle ? `${event.title} â€” ${event.subtitle}` : event.title;
      dayCell.appendChild(eventChip);
    });

    calendarGrid.appendChild(dayCell);
  }
}

function setCalendarView(view) {
  if (!eventListView || !eventCalendarView || !calendarNavigation) return;

  const showCalendar = view === "calendar";
  eventListView.hidden = showCalendar;
  eventCalendarView.hidden = !showCalendar;
  calendarNavigation.hidden = !showCalendar;

  calendarViewButtons.forEach(button => {
    const isActive = button.dataset.calendarView === view;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (showCalendar) {
    renderMonthCalendar();
  }
}

if (eventContainer) {
  renderEventList();
  renderMonthCalendar();

  calendarViewButtons.forEach(button => {
    button.addEventListener("click", () => {
      setCalendarView(button.dataset.calendarView);
    });
  });

  if (calendarPrevious) {
    calendarPrevious.addEventListener("click", () => {
      visibleCalendarMonth = new Date(
        visibleCalendarMonth.getFullYear(),
        visibleCalendarMonth.getMonth() - 1,
        1
      );
      renderMonthCalendar();
    });
  }

  if (calendarNext) {
    calendarNext.addEventListener("click", () => {
      visibleCalendarMonth = new Date(
        visibleCalendarMonth.getFullYear(),
        visibleCalendarMonth.getMonth() + 1,
        1
      );
      renderMonthCalendar();
    });
  }

  if (calendarToday) {
    calendarToday.addEventListener("click", () => {
      visibleCalendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      renderMonthCalendar();
    });
  }
}

const announcementContainer = document.getElementById("announcementContainer");

if (announcementContainer) {
  announcementContainer.innerHTML = "";

  announcements.forEach(post => {
    const card = document.createElement("a");
    card.className = "news-card";
    card.href = `/post/?id=${post.id}`;

    card.innerHTML = `
      <div class="news-meta">
        <span class="news-tag">${post.category}</span>
        <span class="news-date">${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.preview}</p>
      <span class="news-read">Read more â†’</span>
    `;

    announcementContainer.appendChild(card);
  });
}

const officerContainer = document.getElementById("officerContainer");

if (officerContainer) {
  officerContainer.innerHTML = "";

  officers.forEach(officer => {
    const card = document.createElement("a");
    card.className = "officer-card";
    card.href = `/officer/?id=${officer.id}`;

    card.innerHTML = `
      <div class="officer-photo">
        <img src="${officer.smallImage}" alt="${officer.name}" />
      </div>
      <div class="officer-info">
        <h3>${officer.name}</h3>
        <p>${officer.role}</p>
        <span class="officer-click">View profile â†’</span>
      </div>
    `;

    const img = card.querySelector("img");

    img.addEventListener("error", () => {
      const photoBox = card.querySelector(".officer-photo");
      photoBox.innerHTML = `${officer.name}<br>pic`;
    });

    officerContainer.appendChild(card);
  });
}

const officerPrev = document.getElementById("officerPrev");
const officerNext = document.getElementById("officerNext");

if (officerPrev && officerNext && officerContainer) {
  officerPrev.addEventListener("click", () => {
    officerContainer.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

  officerNext.addEventListener("click", () => {
    officerContainer.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });
}

const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

if (newsletterForm && formMessage) {
  const pageParameters = new URLSearchParams(window.location.search);

  if (pageParameters.get("subscribed") === "true") {
    formMessage.textContent = "Thanks! Your newsletter subscription request was sent.";
  }

  newsletterForm.addEventListener("submit", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mailingListRequest = document.getElementById("mailingListRequest");
    const newsletterSubmit = document.getElementById("newsletterSubmit");

    if (mailingListRequest) {
      mailingListRequest.value = `${name} has requested to be on the Northfield DECA mailing list. Their email is ${email}.`;
    }

    if (newsletterSubmit) {
      newsletterSubmit.disabled = true;
      newsletterSubmit.textContent = "Sending...";
    }
  });
}

const profileContainer = document.getElementById("profileContainer");

if (profileContainer) {
  const params = new URLSearchParams(window.location.search);
  const officerId = params.get("id");

  const officer = officers.find(person => person.id === officerId);

  if (officer) {
    document.title = `${officer.name} | Northfield DECA`;

    profileContainer.innerHTML = `
      <a href="/about/#officers" class="back-link">â† Back to Officer Team</a>

      <div class="profile-card">
        <div class="profile-photo">
          <img src="${officer.bigImage}" alt="${officer.name}" />
        </div>

        <div class="profile-content">
          <p class="profile-role">${officer.role}</p>
          <h1>${officer.name}</h1>

          <div class="profile-details">
            <div class="profile-detail">
              <h3>Fun Fact</h3>
              <p>${officer.funFact}</p>
            </div>

            <div class="profile-detail">
              <h3>Favorite DECA Memory</h3>
              <p>${officer.memory}</p>
            </div>

            <div class="profile-detail">
              <h3>Most Excited For Next Year</h3>
              <p>${officer.excited}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    const profileImg = profileContainer.querySelector(".profile-photo img");
    profileImg.addEventListener("error", () => {
      const photoBox = profileContainer.querySelector(".profile-photo");
      photoBox.innerHTML = `${officer.name} big photo`;
    });
  } else {
    profileContainer.innerHTML = `
      <a href="/about/#officers" class="back-link">â† Back to Officer Team</a>

      <div class="profile-card">
        <div class="profile-content">
          <h1>Officer Not Found</h1>
          <p>This officer profile does not exist yet.</p>
        </div>
      </div>
    `;
  }
}

const postContainer = document.getElementById("postContainer");

if (postContainer) {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const post = announcements.find(item => item.id === postId);

  if (post) {
    document.title = `${post.title} | Northfield DECA`;

    postContainer.innerHTML = `
      <a href="/#news" class="back-link">â† Back to Announcements</a>

      <article class="post-card">
        <div class="news-meta">
          <span class="news-tag">${post.category}</span>
          <span class="news-date">${post.date}</span>
        </div>

        <h1>${post.title}</h1>
        <p class="post-body">${post.body}</p>
        <a href="${post.link}" class="btn blue">${post.linkText}</a>
      </article>
    `;
  } else {
    postContainer.innerHTML = `
      <a href="/#news" class="back-link">â† Back to Announcements</a>

      <article class="post-card">
        <h1>Post Not Found</h1>
        <p class="post-body">This announcement does not exist yet.</p>
      </article>
    `;
  }
}


const openOfficerLeaderModal = document.getElementById("openOfficerLeaderModal");
const closeOfficerLeaderModal = document.getElementById("closeOfficerLeaderModal");
const officerLeaderModal = document.getElementById("officerLeaderModal");

function openOfficerModal() {
  if (!officerLeaderModal) return;

  officerLeaderModal.classList.add("active");
  officerLeaderModal.setAttribute("aria-hidden", "false");
}

function closeOfficerModal() {
  if (!officerLeaderModal) return;

  officerLeaderModal.classList.remove("active");
  officerLeaderModal.setAttribute("aria-hidden", "true");
}

if (openOfficerLeaderModal && closeOfficerLeaderModal && officerLeaderModal) {
  openOfficerLeaderModal.addEventListener("click", openOfficerModal);
  closeOfficerLeaderModal.addEventListener("click", closeOfficerModal);

  officerLeaderModal.addEventListener("click", event => {
    if (event.target === officerLeaderModal) {
      closeOfficerModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeOfficerModal();
    }
  });
}
