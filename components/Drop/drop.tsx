import React from 'react'
import styles from '../../styles/drop/drop.module.scss'

export default function Drop() {
  return (
		<main className='container'>
			<section className={styles.drop}>
				<p>Drops ⚡</p>
				<p>View more →</p>
			</section>
			<hr className={styles.lines} />
		</main>
	);
}
