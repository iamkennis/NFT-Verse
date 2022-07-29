import React from 'react'
import styles from '../../styles/auction/auction.module.scss'
import Lopper from '../../shared/svg/lopper'

export default function Auction() {
  return (
		<section className={`container ${styles.auction}`}>
			<div className={styles.lopper}>
				<Lopper />
			</div>
			<h1>Live Aution ⏰</h1>
			<div className={`row ${styles.auctionBox}`}>
				<div className={styles.box1}></div>
				<div className={styles.box2}></div>
				<div className={styles.box3}></div>
			</div>
		</section>
	);
}
