const paginationState = {
	page : {
		pageNumber: 0,
		pageSize: 12
	},
	pokemonsCount: 0,
};

export function paginationReducer(state = paginationState, action) {
	if (action.type === 'INCREMENT_PAGE_NUMBER') {
		return { 
			...state, 
			page: {
				...state.page, 
				pageNumber: state.page.pageNumber + 1 
			}
		};
	}
	if (action.type === 'DECREMENT_PAGE_NUMBER') {
		return { 
			...state, 
			page: {
				...state.page, 
				pageNumber: state.page.pageNumber - 1 
			}
		};
	}
	if (action.type === 'CHANGE_PAGE_SIZE') {
		console.log(action);
		return {
			...state, 
			page: {
				...state.page, 
				pageSize: action.size
			}
		};
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