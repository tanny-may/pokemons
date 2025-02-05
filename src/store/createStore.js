function createStore(reducer, initialState) {
	let state = initialState;
	let functions = [];

	return {
		getState: () => {
			return state;
		},
		dispatch: (action) => {
			state = reducer(state, action);
			functions.forEach(func => func());
		},
		subscribe: (cb) => {
			functions.push(cb);
            return function() {
                functions = functions.filter(func => func !== cb)
            };
		},
	};
}

function reducer(state = 0, action) {
	if (action.type === 'DECREMENT') {
		return state - 1;
	}
	if (action.type === 'INCREMENT') {
		return state + 1;
	}
	return state;
}

const store = createStore(reducer, 0);

const unsubscribeFirst = store.subscribe(() => console.log('first'));

store.dispatch({
    type: 'INCREMENT',
}); // first

const unsubscribeSecond = store.subscribe(() => console.log('second'));

store.dispatch({
	type: 'DECREMENT',
}); // first second

unsubscribeFirst();

store.dispatch({
	type: 'DECREMENT',
}); // second

unsubscribeSecond();

store.dispatch({
	type: 'DECREMENT',
});
