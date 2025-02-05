import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadFromLocalStorage, saveToLocalStorage } from '../domain/localstorage';
import { caughtPokemonsReducer } from './caughtPokemonsReducer';
import { changePageSize, paginationReducer } from './paginationReducer';
import { pokemonPageReducer } from './pokemonPageReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { downloadPokemonsThunk } from './downloadPokemonsThunk';

const reducer = combineReducers({
	caughtPokemons: caughtPokemonsReducer,
	pagination: paginationReducer,
	pokemons: pokemonsReducer,
	pokemonPage: pokemonPageReducer,
});

const persistedState = { caughtPokemons: loadFromLocalStorage() };

const thunkMiddleware = (storeApi) => (next) => (action) => {
	if (typeof action === 'function') {
		action(storeApi.dispatch, storeApi.getState);
	} else {
		next(action);
	}
};

const localStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	if (action.type === 'CATCH_OR_RELEASE_POKEMON') {
		saveToLocalStorage(store.getState().caughtPokemons);
	}
};

const downloadPokemonsMiddleware = (store) => (next) => (action) => {
	const prevPagination = store.getState().pagination.page;
	next(action);
	const nextPagination = store.getState().pagination.page;
	// console.log(store.getState());
	if (prevPagination !== nextPagination) {
		store.dispatch(downloadPokemonsThunk());
	}
	// if (
	// 	action.type === 'INCREMENT_PAGE_NUMBER' ||
	// 	action.type === 'DECREMENT_PAGE_NUMBER' ||
	// 	action.type === 'CHANGE_PAGE_SIZE'
	// ) {
	// 	store.dispatch(downloadPokemonsThunk());
	// }
};

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, downloadPokemonsMiddleware, localStorageMiddleware));

export const store = createStore(reducer, persistedState, enhancer);
store.dispatch(downloadPokemonsThunk());

// https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

// https://redux.js.org/api/createstore

function createStore2(reducer, initialState) {
	
}