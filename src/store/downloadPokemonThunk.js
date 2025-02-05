import { downloadPokemon } from "../domain/downloadPokemon";
import { setPokemonPage } from "./pokemonPageReducer";

export function downloadPokemonThunk(id) {
	return function (dispatch, getState) {
		const state = getState();
		if (!state.pokemonPage.hasOwnProperty(id)) {
			downloadPokemon(id).then((response) => {
				console.log('response', response);
				dispatch(setPokemonPage(response.id, response.name, response.height, response.weight));
			});
		};
	}
}