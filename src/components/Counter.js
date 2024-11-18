import { useSelector } from 'react-redux';
import s from './Counter.module.css';

export function Counter() {
	const { value, total } = useSelector((state) => {
		return {
			total: state.pokemons.length,
			value: state.caughtPokemons.length,
		};
	});
	return (
		<div className={s.wrapper}>
			<h1>Поймано покемонов</h1>
			<p className={s.number}>
				{value}/{total}
			</p>
		</div>
	);
}
