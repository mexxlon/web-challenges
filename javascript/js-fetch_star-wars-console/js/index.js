console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const answer = await fetch(url);
  const data = await answer.json();
  console.log(data);

  const name = data.results[3].name;
  console.log(`The character is: ${name}`);

  const name2 = data.results[9].name;
  console.log(`The second character is: ${name2}`);

  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  console.log(`The eye color of R2-D2 is:`, r2d2.eye_color);
}

fetchData();
