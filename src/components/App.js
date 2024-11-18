import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './Counter';
import { Pokemon } from './Pokemon';
import { Pagination } from './Pagination';
import { downloadPokemons } from '../domain/downloadPokemons';
import { setPokemons } from '../store/pokemonsReducer';
import s from './App.module.css';

function downloadPokemonsThunk(pageNumber, pageSize) {
	return function (dispatch) {
		downloadPokemons(pageNumber, pageSize).then(({ pokemons, pokemonsNumber }) => {
			console.log(pokemons);
			dispatch(setPokemons(pokemons, pokemonsNumber));
		});
	};
}

function App() {
	const dispatch = useDispatch();
	const { pageSize, pageNumber } = useSelector((state) => state.pagination);

	const pokemons = useSelector((state) => state.pokemons);

	useEffect(() => {
		downloadPokemonsThunk(pageNumber, pageSize)(dispatch);
		// dispatch(downloadPokemonsThunk(pageNumber, pageSize));
	}, [pageSize, pageNumber]);

	return (
		<div className={s.wrapper}>
			<div className={s.div}>
				{pokemons.length !== 0 && <Counter />}
				<ul className={s.list}>
					{pokemons.map((pokemon) => (
						<Pokemon name={pokemon.name} id={pokemon.id} />
					))}
				</ul>

				<Pagination />
			</div>
		</div>
	);
}

export default App;
