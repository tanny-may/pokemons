import styles from './Counter.module.css';

export function Counter({ value, total }) {
	return (
		<div className={styles.wrapper}>
			<h1>Поймано покемонов</h1>
			<p className={styles.number}>
				{value}/{total}
			</p>
		</div>
	);
}
