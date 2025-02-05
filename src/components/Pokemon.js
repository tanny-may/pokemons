import { useDispatch, useSelector } from 'react-redux';
import s from './Pokemon.module.css';
import { catchOrReleasePokemon } from '../store/caughtPokemonsReducer';
import { Link } from 'react-router-dom';


export function Pokemon({ name, id }) {
	const caughtPokemons = useSelector((state) => state.caughtPokemons);
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(catchOrReleasePokemon(id));
	}

	const imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

	return (
		<li
			className={s.card}
			style={{
				backgroundColor: caughtPokemons.includes(id) ? 'darkRed' : '',
			}}
		>
			<p className={s.name}>
				{name} #{id}
			</p>
			<Link to={`/pokemons/${id}`}>
				<img className={s.image} src={imageLink}></img>
			</Link>
			<button className={s.button} onClick={handleClick}>
				{caughtPokemons.includes(id) ? 'ОТПУСТИТЬ' : 'ПОЙМАТЬ'}
			</button>
		</li>
	);
}
