import React from 'react';
import { useSelector } from 'react-redux';
import { Counter } from './Counter';
import { Pokemon } from './Pokemon';
import { Pagination } from './Pagination';
import s from './App.module.css';

function App() {
	const pokemons = useSelector((state) => state.pokemons);

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