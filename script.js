const officers = [
  {
    id: "scarlett-tolan",
    firstName: "scarlett",
    name: "Scarlett Tolan",
    role: "President",
    smallImage: "scarlettsmall.jpg",
    bigImage: "scarlettbig.JPEG",
    funFact: "I love Stranger Things",
    memory: "ICDC in Atlanta",
    excited: "Senior sunrise!"
  },
  {
    id: "will-zhang",
    firstName: "will",
    name: "Will Zhang",
    role: "Vice President",
    smallImage: "willsmall.jpg",
    bigImage: "willbig.jpg",
    funFact: "I’ve gotten bit by a snake",
    memory: "Getting ice cream in Atlanta",
    excited: "Helping people qualify for State!"
  },
  {
    id: "ava-lonigro",
    firstName: "ava",
    name: "Ava Lonigro",
    role: "VP of Marketing",
    smallImage: "avasmall.jpg",
    bigImage: "avabig.JPEG",
    funFact: "I am a huge Avs fan",
    memory: "Six Flags during ICDC in Atlanta!",
    excited: "Senior-y things and prom!"
  },
  {
    id: "isabelle-brehm",
    firstName: "isabelle",
    name: "Isabelle Brehm",
    role: "VP of Finance",
    smallImage: "isabellesmall.jpg",
    bigImage: "isabellebig.JPG",
    funFact: "I want to go to med school",
    memory: "Running to last roller coaster at Six Flags",
    excited: "Going to State"
  },
  {
    id: "demi-dolechek",
    firstName: "demi",
    name: "Demi Dolechek",
    role: "VP of Community Outreach",
    smallImage: "demismall.jpg",
    bigImage: "demibig.jpg",
    funFact: "I can juggle",
    memory: "Trading pins at ICDC",
    excited: "Districts with incoming freshmen"
  },
  {
    id: "mimi-haile",
    firstName: "mimi",
    name: "Mimi Haile",
    role: "VP of Operations",
    smallImage: "mimismall.jpg",
    bigImage: "mimibig.JPG",
    funFact: "I’m really good at puzzles",
    memory: "ICDC in Atlanta",
    excited: "Seeing new faces!"
  },
  {
    id: "owen-huie",
    firstName: "owen",
    name: "Owen Huie",
    role: "Junior President",
    smallImage: "owensmall.jpg",
    bigImage: "owenbig.jpg",
    funFact: "I have been to 8 countries!",
    memory: "Six Flags Rollercoasters at ICDC!",
    excited: "Being a part of DECA leadership!"
  },
  {
    id: "lera-andronova",
    firstName: "lera",
    name: "Lera Andronova",
    role: "Junior Vice President",
    smallImage: "lerasmall.jpg",
    bigImage: "lerabig.jpg",
    funFact: "I speak Russian",
    memory: "Winning state champion",
    excited: "Districts with freshmen!"
  },
  {
    id: "lila-rowley",
    firstName: "lila",
    name: "Lila Rowley",
    role: "Junior VP of Marketing",
    smallImage: "lilasmall.jpg",
    bigImage: "lilabig.jpg",
    funFact: "I know how to surf!",
    memory: "State 2025!",
    excited: "Being a DECA officer and prom!"
  },
  {
    id: "maddie-ng",
    firstName: "maddie",
    name: "Maddie Ng",
    role: "Junior VP of Finance",
    smallImage: "maddiesmall.jpg",
    bigImage: "maddiebig.jpg",
    funFact: "I can type over 100 words per minute!",
    memory: "Sophomore year State with friends!",
    excited: "Having an off period!"
  },
  {
    id: "keira-mccord",
    firstName: "keira",
    name: "Keira McCord",
    role: "Junior VP of Community Outreach",
    smallImage: "keirasmall.jpg",
    bigImage: "keirabig.jpg",
    funFact: "I am left-handed!",
    memory: "Finalizing at State!",
    excited: "Prom and DECA!"
  }
];

const events = [
  {
    date: "August 28, 2026",
    title: "Club Fair",
    description: "Stop by the DECA table and meet the chapter!!"
  },
  {
    date: "TBD",
    title: "First Meeting",
    description: "Our first meeting of the school year in the Aux Gym."
  },
  {
    date: "November",
    title: "Districts",
    description: "Northfield DECA members compete at the district level."
  },
  {
    date: "February",
    title: "State",
    description: "The State Career Development Conference in CO Springs."
  },
  {
    date: "April 17, 2027",
    title: "ICDC",
    description: "The International Career Development Conference in Anaheim."
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
      <div class="officer-photo">
        <img src="${officer.smallImage}" alt="${officer.name}" />
      </div>
      <div class="officer-info">
        <h3>${officer.name}</h3>
        <p>${officer.role}</p>
        <span class="officer-click">View profile →</span>
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
