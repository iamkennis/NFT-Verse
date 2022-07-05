import React from 'react'
import { motion} from 'framer-motion'
import styles from '../../styles/hero/hero.module.scss'
import { statData } from '../../mocks/header';

export default function Hero() {
  return (
		<header className={`container ${styles.hero}`}>
			<div className='row'>
				<div className={`col-sm-6 ${styles.heroImg}`}>
					{/* <img src='/images/heroImg.png' alt='bg' /> */}
					<h1>NFT</h1>
				</div>
				<div className={`col-sm-6 ${styles.heroText}`}>
					<h1>Discover, and sell Extraordinary <br/> NFTs</h1>
					<span>
						<img />
						<img />
					</span>
					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Explore Now
					</motion.button>
					<hr className={styles.lines} />
					<div className={styles.stat}>
						{statData.map((data: any, _index: any) => (
							<span key={_index}>
								<h6>{data.total}</h6>
								<p>{data.title}</p>
							</span>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
