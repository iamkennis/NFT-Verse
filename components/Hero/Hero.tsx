import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../../styles/hero/hero.module.scss'
import { statData } from '../../mocks/header';
// import {TiImage} from 'react-icons/ti'
import TrimCirlce from '../../shared/svg/trimCirlce'




export default function Hero() {
	
  return (
		<header className={`container ${styles.hero}`}>
			<div className='row'>
				<div className={`col-sm-6 ${styles.heroImg}`}>
					<div className={styles.dimg}>
						<motion.img
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: 200, opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.2 }}
							src='/images/i.svg'
						/>
						<motion.img
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: 200, opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.2 }}
							src='/images/j.svg'
						/>
					</div>
					<div className={styles.v}>
						<img src='/images/Verse.svg' />
					</div>
					<div className={styles.Imgblob}>
						{/* <img src='/images/1.svg' />
						
						<img src='/images/pp.svg' /> */}
						{/* <h1>NFT</h1> */}
						<Image
							src='/images/k.svg'
							alt='hero'
							height={900}
							width={800}
							objectFit={'cover'}
						/>
					</div>
				</div>
				<div className={styles.trimCirlce}>
					<TrimCirlce />
				</div>

				<motion.div
					className={`col-sm-6 ${styles.heroText}`}>
					<h1>
						Discover, and sell
						<br /> Extraordinary <br /> NFTs
					</h1>
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
				</motion.div>
			</div>
		</header>
	);
}

