import React from 'react'
import Image from 'next/image'
import styles from '../../styles/drop/drop.module.scss'

export default function Drop() {
	return (
		<main className='container'>
			<section className={styles.drop}>
				<p>Drops ⚡</p>
				<p>View more →</p>
			</section>
			<hr className={styles.lines} />
			<section className='row'>
				<div className='col-sm-5'>
					<Image
						src='/images/girlread.png'
						alt='hero'
						height={500}
						width={400}
						objectFit={'contain'}
					/>
				</div>
				<div className={`col-sm-7 ${styles.dropCarousel}`}>
					<h1>Hermes</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
						magnam, praesentium error suscipit, quasi, neque voluptatem tenetur
						porro modi animi commodi doloremque ullam? Modi, ullam. Quasi dicta
						deleniti expedita illo,neque voluptatem tenetur porro modi animi
						commodi doloremque ullam? Modi, ullam. Quasi dicta deleniti expedita
						illo?
					</p>
					<h3>COUNTDOWN</h3>
					<ul>
						<li>
							2 <small>Days</small>
						</li>
						<li>
							12 <small>Hours</small>
						</li>
						<li>
							30 <small>Minutes</small>
						</li>
						<li>
							54 <small> Seconds</small>
						</li>
					</ul>
					<div>
						<button>Place a Bid</button>
						<span>↻</span>
					</div>
				</div>
			</section>
		</main>
	);
}
