import { downloadPokemons } from '../domain/downloadPokemons';
import { setPokemons } from '../store/pokemonsReducer';

export function downloadPokemonsThunk() {
	
	return function (dispatch, getState) {
		const {pageNumber, pageSize} = getState().pagination.page;
		downloadPokemons(pageNumber, pageSize).then(({ pokemons, pokemonsNumber }) => {
			// console.log(pokemons);
			dispatch(setPokemons(pokemons, pokemonsNumber));
		});
	};
}