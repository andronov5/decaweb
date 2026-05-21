const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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

const officers = [
  { name: "Scarlett Tolan", role: "President" },
  { name: "Will Zhang", role: "Vice President" },
  { name: "Ava Lonigro", role: "VP of Marketing" },
  { name: "Isabelle Brehm", role: "VP of Finance" },
  { name: "Demi Dolechek", role: "VP of Community Outreach" },
  { name: "Mimi Haile", role: "VP of Operations" },
  { name: "Owen Huie", role: "Junior President" },
  { name: "Lera Andronova", role: "Junior Vice President" },
  { name: "Lila Rowley", role: "Junior VP of Marketing" },
  { name: "Maddie Ng", role: "Junior VP of Finance" },
  { name: "Keira McCord", role: "Junior VP of Community Outreach" }
];

const eventContainer = document.getElementById("eventContainer");

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

const officerContainer = document.getElementById("officerContainer");

officers.forEach(officer => {
  const card = document.createElement("article");
  card.className = "officer-card";

  card.innerHTML = `
    <h3>${officer.name}</h3>
    <p>${officer.role}</p>
  `;

  officerContainer.appendChild(card);
});

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent = `Thanks, ${name}! Your interest form was submitted.`;
  joinForm.reset();
});
