import { caughtPokemonsReducer } from './caughtPokemonsReducer';
import { paginationReducer } from './paginationReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { createStore, combineReducers,applyMiddleware } from 'redux';

// const defaultState = {
//     pokemons: [],
//     caughtPokemons: [],
//     pagination: {
//       pageNumber: 0,
//       pageSize: 12,
//       pokemonsCount: 0,
//     },
// };

const reducer = combineReducers({
	caughtPokemons: caughtPokemonsReducer,
	pagination: paginationReducer,
	pokemons: pokemonsReducer,
});

// middleware
// react router страница про покемона

const m1 = storeApi => next => action => {
	console.log("m1");
	next(action);
}

const m2 = storeApi => next => action => {
	console.log("m2");
	next(action);
}

const m3 = storeApi => next => action => {
	console.log("m3");
	next(action);
}

export const store = createStore(reducer, applyMiddleware(m1, m2, m3));