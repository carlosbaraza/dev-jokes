import jokes from "./jokes.json";
const sortedJokes = jokes
  .sort((j1, j2) => (j1.claps < j2.claps ? 1 : -1));

export function fetchJoke(index) {
  return sortedJokes[index];
}
