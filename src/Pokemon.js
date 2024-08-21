import styles from './Pokemon.module.css';
import { useState } from 'react';

export  function Pokemon({ name, id, isCaught, caughtPokemons, setCaughtPokemons }) {

	function handleClick() {
		if (!isCaught) {
			setCaughtPokemons([...caughtPokemons, id]);
		} else {
			setCaughtPokemons(caughtPokemons.filter(pokemonID => pokemonID !== id));
		}
	}

	const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;



	return (
		<li
			className={styles.element}
			style={{
				backgroundColor: isCaught ? 'darkRed' : '',
			}}
		>
			<h3 className={styles.name}>{name}</h3>
			<img className={styles.image} src={imageLink}></img>
			<button className={styles.button} onClick={handleClick}>
				{isCaught ? 'ОТПУСТИТЬ' : 'ПОЙМАТЬ'}
			</button>
		</li>
	);
}
