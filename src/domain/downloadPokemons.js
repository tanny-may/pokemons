export function downloadPokemons(pageNumber, pageSize) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber * pageSize}&limit=${pageSize}`)
		.then((response) => response.json())
		.then((data) => {
			return {
				pokemons: data.results.map((pokemon) => {
					return {
						name: pokemon.name,
						id: Number(pokemon.url.slice(34, -1)),
					};
				}),
				pokemonsNumber: data.count,
			};
		});
}
