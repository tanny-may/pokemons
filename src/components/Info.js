import s from './Info.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { catchOrReleasePokemon } from '../store/caughtPokemonsReducer';

export function Info() {
	const pokemon = useLoaderData();
	const caughtPokemons = useSelector((state) => state.caughtPokemons);
	const dispatch = useDispatch();
	const [showCharacteristics, setShowCharacteristics] = useState(false);
	
	function handleClick() {
		dispatch(catchOrReleasePokemon(pokemon.id));
	}

	const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
	return (
		<div className={s.info} style={{
			backgroundColor: caughtPokemons.includes(pokemon.id) ? 'darkRed' : '',
		}}>
			<div className={s.pokemon}>
				<p>{pokemon.name}</p>
				<img src={imageLink}></img>
			</div>

			<div className={s.buttons}>
				<button className={s.button} onClick={handleClick}>
					{caughtPokemons.includes(pokemon.id) ? 'ОТПУСТИТЬ' : 'ПОЙМАТЬ'}
				</button>
				
				{!showCharacteristics ? 
					<button className={s.button} onClick={() => setShowCharacteristics(!showCharacteristics)}>Показать характеристики</button> :

					<div className={s.characteristics}>
						<p>Вес: {pokemon.weight}</p>
						<p>Рост: {pokemon.height}</p>
					</div>
				}
			</div>
		</div>
	);
}
