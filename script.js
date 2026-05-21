const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const events = [
  {
    date: "September 12",
    title: "First DECA Meeting",
    description: "Learn about the chapter, competition events, and how to get involved."
  },
  {
    date: "October 3",
    title: "Roleplay Practice",
    description: "Practice business roleplays with officers and experienced competitors."
  },
  {
    date: "November 15",
    title: "Mock Competition",
    description: "Prepare for districts with a full practice competition experience."
  }
];

const officers = [
  {
    name: "Your Name",
    position: "President",
    description: "Leads chapter meetings, organizes events, and supports the officer team."
  },
  {
    name: "Officer Name",
    position: "Vice President",
    description: "Helps coordinate chapter activities, recruitment, and competition preparation."
  },
  {
    name: "Officer Name",
    position: "Marketing Officer",
    description: "Manages social media, chapter announcements, and promotional materials."
  },
  {
    name: "Officer Name",
    position: "Finance Officer",
    description: "Helps with fundraising, chapter finances, and event planning."
  },
  {
    name: "Officer Name",
    position: "Secretary",
    description: "Keeps track of meeting notes, forms, deadlines, and member communication."
  },
  {
    name: "Officer Name",
    position: "Community Outreach",
    description: "Plans service projects, partnerships, and school involvement."
  }
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
    <div class="officer-img">Photo</div>
    <h3>${officer.name}</h3>
    <p><strong>${officer.position}</strong></p>
    <p>${officer.description}</p>
  `;

  officerContainer.appendChild(card);
});

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent = `Thank you, ${name}! Your interest form has been submitted.`;

  joinForm.reset();
});
