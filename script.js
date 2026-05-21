const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const events = [
  {
    date: "August 28, 2026",
    title: "Club Fair",
    description: "Meet our chapter, learn about DECA, and sign up to get involved."
  },
  {
    date: "TBD",
    title: "First Meeting",
    description: "Our first official chapter meeting of the year."
  },
  {
    date: "November 18, 2026",
    title: "Districts",
    description: "District competition for Northfield DECA members."
  },
  {
    date: "February 26, 2027",
    title: "State",
    description: "State Career Development Conference."
  },
  {
    date: "April 17, 2027",
    title: "ICDC",
    description: "International Career Development Conference."
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
  const card = document.createElement("div");
  card.classList.add("event-card");

  card.innerHTML = `
    <p class="event-date">${event.date}</p>
    <h3>${event.title}</h3>
    <p>${event.description}</p>
  `;

  eventContainer.appendChild(card);
});

const officerContainer = document.getElementById("officerContainer");

officers.forEach(officer => {
  const card = document.createElement("div");
  card.classList.add("officer-card");

  card.innerHTML = `
    <h3>${officer.name}</h3>
    <p>${officer.role}</p>
  `;

  officerContainer.appendChild(card);
});

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  formMessage.textContent = `Thanks, ${name}! Your form was submitted.`;

  joinForm.reset();
});
