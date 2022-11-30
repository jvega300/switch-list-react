export async function getAll() {
  return fetch("/data.json").then((resp) => resp.json());
}

export async function getByName(search) {
  const lcSearch = search.toLowerCase();
  return fetch("/data.json")
    .then((resp) => resp.json())
    .then((pokemon) =>
      pokemon.filter(({ name }) => name.toLowerCase().includes(lcSearch))
    );
}
