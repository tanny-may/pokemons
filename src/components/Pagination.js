import { useDispatch, useSelector } from 'react-redux';
import s from './Pagination.module.css';
import { Select } from './Select';
import { decrementPageNumber, incrementPageNumber } from '../store/paginationReducer';

export function Pagination() {
	const dispatch = useDispatch();
	const { pageSize, pageNumber, pokemonsCount } = useSelector((state) => state.pagination);
	const lastPage = Math.floor(pokemonsCount / pageSize);

	return (
		<div className={s.pagination}>
			<button
				className={s.paginationButton}
				onClick={() => dispatch(decrementPageNumber())}
				disabled={pageNumber === 0}
			>
				назад
			</button>

			<Select />

			<button
				className={s.paginationButton}
				onClick={() => dispatch(incrementPageNumber())}
				disabled={pageNumber === lastPage}
			>
				вперёд
			</button>
		</div>
	);
}
