const officers = [
  {
    id: "scarlett-tolan",
    name: "Scarlett Tolan",
    role: "President",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Scarlett is most excited for next year coming soon."
  },
  {
    id: "will-zhang",
    name: "Will Zhang",
    role: "Vice President",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Will is most excited for next year coming soon."
  },
  {
    id: "ava-lonigro",
    name: "Ava Lonigro",
    role: "VP of Marketing",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Ava is most excited for next year coming soon."
  },
  {
    id: "isabelle-brehm",
    name: "Isabelle Brehm",
    role: "VP of Finance",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Isabelle is most excited for next year coming soon."
  },
  {
    id: "demi-dolechek",
    name: "Demi Dolechek",
    role: "VP of Community Outreach",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Demi is most excited for next year coming soon."
  },
  {
    id: "mimi-haile",
    name: "Mimi Haile",
    role: "VP of Operations",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Mimi is most excited for next year coming soon."
  },
  {
    id: "owen-huie",
    name: "Owen Huie",
    role: "Junior President",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Owen is most excited for next year coming soon."
  },
  {
    id: "lera-andronova",
    name: "Lera Andronova",
    role: "Junior Vice President",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Lera is most excited for next year coming soon."
  },
  {
    id: "lila-rowley",
    name: "Lila Rowley",
    role: "Junior VP of Marketing",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Lila is most excited for next year coming soon."
  },
  {
    id: "maddie-ng",
    name: "Maddie Ng",
    role: "Junior VP of Finance",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Maddie is most excited for next year coming soon."
  },
  {
    id: "keira-mccord",
    name: "Keira McCord",
    role: "Junior VP of Community Outreach",
    funFact: "Fun fact coming soon.",
    memory: "Favorite DECA memory coming soon.",
    excited: "What Keira is most excited for next year coming soon."
  }
];

const events = [
  {
    date: "August 28, 2026",
    title: "Club Fair",
    description: "Stop by the DECA table, meet the chapter, and learn how to get involved."
  },
  {
    date: "TBD",
    title: "First Meeting",
    description: "Our first official meeting of the school year. More details coming soon."
  },
  {
    date: "November 18, 2026",
    title: "Districts",
    description: "Northfield DECA members compete at the district level."
  },
  {
    date: "February 26, 2027",
    title: "State",
    description: "The State Career Development Conference."
  },
  {
    date: "April 17, 2027",
    title: "ICDC",
    description: "The International Career Development Conference."
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

if (eventContainer) {
  eventContainer.innerHTML = "";

  events.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <div class="event-date">${event.date}</div>
      <div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `;

    eventContainer.appendChild(card);
  });
}

const officerContainer = document.getElementById("officerContainer");

if (officerContainer) {
  officerContainer.innerHTML = "";

  officers.forEach(officer => {
    const card = document.createElement("a");
    card.className = "officer-card";
    card.href = `officer.html?id=${officer.id}`;

    card.innerHTML = `
      <div class="officer-photo">${officer.name} pic</div>
      <div class="officer-info">
        <h3>${officer.name}</h3>
        <p>${officer.role}</p>
        <span class="officer-click">View profile →</span>
      </div>
    `;

    officerContainer.appendChild(card);
  });
}

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

if (joinForm && formMessage) {
  joinForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent = `Thanks, ${name}! Your interest form was submitted.`;
    joinForm.reset();
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
      <a href="index.html#officers" class="back-link">← Back to Officer Team</a>

      <div class="profile-card">
        <div class="profile-photo">${officer.name} pic</div>

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
  } else {
    profileContainer.innerHTML = `
      <a href="index.html#officers" class="back-link">← Back to Officer Team</a>

      <div class="profile-card">
        <div class="profile-content">
          <h1>Officer Not Found</h1>
          <p>This officer profile does not exist yet.</p>
        </div>
      </div>
    `;
  }
}
