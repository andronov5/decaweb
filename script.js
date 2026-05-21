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
  }
}
