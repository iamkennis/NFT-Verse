import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../../styles/hero/hero.module.scss'
import { statData } from '../../mocks/header';
import {TiImage} from 'react-icons/ti'

export default function Hero() {
  return (
		<header className={`container ${styles.hero}`}>
			<div className='row'>
				<div className={`col-sm-6 ${styles.heroImg}`}>
					<Image
						src='/images/girlread.png'
						alt='hero'
						height={500}
						width={500}
						objectFit={'contain'}
						// className={styles.Imgblob}
					/>
					{/* <h1>NFT</h1> */}
				</div>
				<div className={`col-sm-6 ${styles.heroText}`}>
					<h1>
						Discover, and sell Extraordinary <br /> NFTs
					</h1>
					<span>
						<img />
						<img />
					</span>
					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<TiImage /> {''}
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
