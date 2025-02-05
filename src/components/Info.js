import s from './Info.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { catchOrReleasePokemon } from '../store/caughtPokemonsReducer';
import { downloadPokemonThunk } from '../store/downloadPokemonThunk';

// загружаем данные одного покемона и кладём их в стор (thunk)
// хранить Id пойманных покемонов в local storage

export function Info() {
	const dispatch = useDispatch();
	const [showCharacteristics, setShowCharacteristics] = useState(false);

	let { pokemonId } = useParams();
	pokemonId = Number(pokemonId);

	const pokemon = useSelector((state) => state.pokemonPage[pokemonId]);
	const caughtPokemons = useSelector((state) => state.caughtPokemons);


	function handleClick() {
		dispatch(catchOrReleasePokemon(pokemonId));
	}

	useEffect(() => {
		dispatch(downloadPokemonThunk(pokemonId));
	}, [pokemonId]);

	const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

	if (!pokemon) return <p>loading</p>;
	return (
		<div
			className={s.info}
			style={{
				backgroundColor: caughtPokemons.includes(pokemonId) ? 'darkRed' : '',
			}}
		>
			<div className={s.pokemon}>
				<p>{pokemon.name}</p>
				<img src={imageLink}></img>
			</div>

			<div className={s.buttons}>
				<button className={s.button} onClick={handleClick}>
					{caughtPokemons.includes(pokemonId) ? 'ОТПУСТИТЬ' : 'ПОЙМАТЬ'}
				</button>

				{!showCharacteristics ? (
					<button className={s.button} onClick={() => setShowCharacteristics(!showCharacteristics)}>
						Показать характеристики
					</button>
				) : (
					<div className={s.characteristics}>
						<p>Вес: {pokemon.weight}</p>
						<p>Рост: {pokemon.height}</p>
					</div>
				)}
			</div>
		</div>
	);
}
