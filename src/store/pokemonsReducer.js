export function pokemonsReducer(state = [], action) {
	if (action.type === 'SET_POKEMONS') {
		return action.pokemons;
	}
	return state;
}

export function setPokemons(pokemons, count) {
	return { type: 'SET_POKEMONS', pokemons, count };
}