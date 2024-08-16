import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstname: chance.first(),
    lastname: chance.last(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    profession: chance.profession(),
  };

  response.status(200).json(character);
}
