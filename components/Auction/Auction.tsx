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
			{/* <small>
				<svg
					width='9'
					height='14'
					viewBox='0 0 9 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M2 7L1.29289 6.29289L0.585786 7L1.29289 7.70711L2 7ZM7.29289 0.292893L1.29289 6.29289L2.70711 7.70711L8.70711 1.70711L7.29289 0.292893ZM1.29289 7.70711L7.29289 13.7071L8.70711 12.2929L2.70711 6.29289L1.29289 7.70711Z'
						fill='#CCD2E3'
					/>
				</svg>
		  </small> */}
		  
			<div className={`row col-md-12 ${styles.auctionBox}`}>
				<div className={styles.smallerBox}>
					<img src='/images/R7.png' />
					<small className={styles.smallBox}>
						<span>
							<p>Current Bid</p>
							<h5>0.34 ETH</h5>
						</span>
						<span>
							<p>Ends In</p>
							<h5>12:35:40</h5>
						</span>
					</small>
					<div className={styles.profile}>
						<span>
							<h5>Blue Print</h5>
						</span>
						<span>
							<p>@Emile</p>
							{/* <img src='/images' /> */}
						</span>
					</div>
				</div>
				<div className={styles.smallerBox}>
					<img src='/images/R8.png' />
					<small className={styles.smallBox}>
						<span>
							<p>Current Bid</p>
							<h5>0.34 ETH</h5>
						</span>
						<span>
							<p>Ends In</p>
							<h5>12:35:40</h5>
						</span>
					</small>
					<div className={styles.profile}>
						<span>
							<h5>Blue Print</h5>
						</span>
						<span>
							<p>@Emile</p>
							{/* <img src='/images/E/> */}
						</span>
					</div>
				</div>

				<div className={styles.smallerBox}>
					<img src='/images/R9.png' />
					<small className={styles.smallBox}>
						<span>
							<p>Current Bid</p>
							<h5>0.34 ETH</h5>
						</span>
						<span>
							<p>Ends In</p>
							<h5>12:35:40</h5>
						</span>
					</small>
					<div className={styles.profile}>
						<span>
							<h5>Blue Print</h5>
						</span>
						<span>
							<p>@Emile</p>
							{/* <img src='/images' /> */}
						</span>
					</div>
				  </div>
				  
				
				{/* <svg
					width='9'
					height='14'
					viewBox='0 0 9 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7 7L7.70711 6.29289L8.41421 7L7.70711 7.70711L7 7ZM1.70711 0.292893L7.70711 6.29289L6.29289 7.70711L0.292893 1.70711L1.70711 0.292893ZM7.70711 7.70711L1.70711 13.7071L0.292893 12.2929L6.29289 6.29289L7.70711 7.70711Z'
						fill='#CCD2E3'
					/>
				</svg> */}
				
			</div>
			
			
		</section>
	);
}
