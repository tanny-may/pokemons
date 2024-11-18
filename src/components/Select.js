import { useDispatch } from 'react-redux';
import s from './Pagination.module.css';
import { changePageSize } from '../store/paginationReducer';

export function Select() {
	const dispatch = useDispatch();
	return (
		<form>
			<span className={s.pokemonsNumberText}>Сколько покемонов отображать на странице:</span>
			<select onChange={(e) => dispatch(changePageSize(e.target.value))}>
				<option>8</option>
				<option selected={true}>12</option>
				<option>16</option>
			</select>
		</form>
	);
}
