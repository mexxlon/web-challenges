console.log("Sanity check");

const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const peopleList = document.querySelector("[data-js='people-list']");
const allButton = document.querySelector("[data-js='all-button']");
const issButton = document.querySelector("[data-js='ISS-button']");
const tiangongButton = document.querySelector("[data-js='Tiangong-button']");

let peopleData = [];

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log("data: ", data);
  peopleInSpace.textContent = data.number;
  peopleData = data.people;
  updatePeopleList(peopleData);
}

function updatePeopleList(people) {
  peopleList.innerHTML = "";
  people.forEach((person) => {
    const listElement = document.createElement("li");
    listElement.textContent = `${person.name} (${person.craft})`;
    peopleList.appendChild(listElement);
  });
}

function filterPeopleByCraft(craft) {
  if (craft === "All") {
    updatePeopleList(peopleData);
  } else {
    const filteredPeople = peopleData.filter(
      (person) => person.craft === craft
    );
    updatePeopleList(filteredPeople);
  }
}

allButton.addEventListener("click", () => filterPeopleByCraft("All"));
issButton.addEventListener("click", () => filterPeopleByCraft("ISS"));
tiangongButton.addEventListener("click", () => filterPeopleByCraft("Tiangong"));

getPeopleInSpace();
