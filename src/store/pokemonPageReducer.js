export function pokemonPageReducer(state = {}, action) {
	if (action.type === 'SET_POKEMON_PAGE') {
		console.log('ACTION', action);
		return {
			...state,
			[action.id]: {
				name: action.name,
				height: action.height,
				weight: action.weight,
			},
		};
	}
    return state;
}

// {
//   1: {
//     name:
//     height:
//     weight:
//   },
//   5: {
//     name:
//     height
//     weight
//   },
// }

export function setPokemonPage(id, name, height, weight) {
	return { type: 'SET_POKEMON_PAGE',id, name, height, weight };
}