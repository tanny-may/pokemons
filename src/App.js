import React from 'react';
import styles from './App.module.css';
import {Counter} from './Counter';
import {Pokemon} from './Pokemon';
import { useState } from 'react';

const pokemons2 = [
	{
		name: 'bulbasaur',
		id: '1',
	},
	{
		name: 'ivysaur',
		id: '2',
	},
	{
		name: 'venusaur',
		id: '3',
	},
	{
		name: 'charmander',
		id: '4',
	},
	{
		name: 'charmeleon',
		id: '5',
	},
	{
		name: 'charizard',
		id: '6',
	},
	{
		name: 'squirtle',
		id: '7',
	},
	{
		name: 'wartortle',
		id: '8',
	},
	{
		name: 'blastoise',
		id: '9',
	},
	{
		name: 'caterpie',
		id: '10',
	},
	{
		name: 'metapod',
		id: '11',
	},
	{
		name: 'butterfree',
		id: '12',
	},
	{
		name: 'weedle',
		id: '13',
	},
	{
		name: 'kakuna',
		id: '14',
	},
	{
		name: 'beedrill',
		id: '15',
	},
	{
		name: 'pidgey',
		id: '16',
	},
	{
		name: 'pidgeotto',
		id: '17',
	},
	{
		name: 'pidgeot',
		id: '18',
	},
	{
		name: 'rattata',
		id: '19',
	},
	{
		name: 'raticate',
		id: '20',
	},
];

// setCaughtPokemons доделать
function App() {
	const [caughtPokemons, setCaughtPokemons] = useState([]);

	return (
		<div className={styles.div}>
			<Counter value={caughtPokemons.length} total={pokemons2.length} />
			<ul className={styles.list}>
				{pokemons2.map((pokemon) => (
					<Pokemon
						name = {pokemon.name}
						id = {pokemon.id}
						isCaught = {caughtPokemons.includes(pokemon.id)}
						caughtPokemons = {caughtPokemons}
						setCaughtPokemons = {setCaughtPokemons}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;