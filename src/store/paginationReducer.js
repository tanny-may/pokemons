const paginationState = {
	pageNumber: 0,
	pageSize: 12,
	pokemonsCount: 0,
};

export function paginationReducer(state = paginationState, action) {
	if (action.type === 'INCREMENT_PAGE_NUMBER' && state.pageNumber < 1300) {
		return { ...state, pageNumber: state.pageNumber + 1 };
	}
	if (action.type === 'DECREMENT_PAGE_NUMBER' && state.pageNumber > 0) {
		return { ...state, pageNumber: state.pageNumber - 1 };
	}
	if (action.type === 'CHANGE_PAGE_SIZE') {
		return { ...state, pageSize: action.size };
	}
	if (action.type === 'INCREMENT_POKEMONS_COUNT') {
		return { ...state, pokemonsCount: state.pokemonsCount + 1 };
	}
	if (action.type === 'DECREMENT_POKEMONS_COUNT') {
		return { ...state, pokemonsCount: state.pokemonsCount - 1 };
	}
	if (action.type === 'SET_POKEMONS') {
		return { ...state, pokemonsCount: action.count };
	}
	return state;
}

export function incrementPageNumber() {
	return { type: 'INCREMENT_PAGE_NUMBER' };
}

export function decrementPageNumber() {
	return { type: 'DECREMENT_PAGE_NUMBER' };
}

export function changePageSize(size) {
	return { type: 'CHANGE_PAGE_SIZE', size };
}

export function incrementPokemonsCount() {
	return { type: 'INCREMENT_POKEMONS_COUNT' };
}

export function decrementPokemonsCount() {
	return { type: 'DECREMENT_POKEMONS_COUNT' };
}