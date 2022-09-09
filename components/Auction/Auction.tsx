import React from 'react'
import styles from '../../styles/auction/auction.module.scss'
import Lopper from '../../shared/svg/lopper'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Navigation, EffectFade } from 'swiper';
import {userReview} from '../../mocks/user'

export default function Auction() {
  return (
		<section className={`container ${styles.auction}`}>
			<div className={styles.lopper}>
				<Lopper />
			</div>
			<h1>Live Aution ⏰</h1>
			{/* <Swiper
				effect='fade'
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[Pagination, Navigation, EffectFade]}
				className={styles.mySwiper}> */}
			<div className={`row ${styles.auctionBox}`}>
				{/* <SwiperSlide > */}
				{/* <span className='swiper-button-prev'> */}
				<small>
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
				</small>
				{/* </span> */}

				<div className={styles.smallerBox}>
					<img src='/images/pro3.png' />
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
					<img src='/images/pro3.png' />
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
					<img src='/images/pro6.png' />
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
				{/* <span className='swiper-button-next'> */}
				<svg
					width='9'
					height='14'
					viewBox='0 0 9 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7 7L7.70711 6.29289L8.41421 7L7.70711 7.70711L7 7ZM1.70711 0.292893L7.70711 6.29289L6.29289 7.70711L0.292893 1.70711L1.70711 0.292893ZM7.70711 7.70711L1.70711 13.7071L0.292893 12.2929L6.29289 6.29289L7.70711 7.70711Z'
						fill='#CCD2E3'
					/>
				</svg>
				{/* </span> */}
				{/* </SwiperSlide> */}
			</div>
			{/* </Swiper> */}
			<section>
				<div className={styles.user}>
					<aside>
						<label>Top</label>
						<select>
							<option>sellers</option>
							<option>buyers</option>
						</select>
					</aside>
					<aside>
						<label>In</label>
						<select>
							<option>1day</option>
							<option>2day</option>
							<option>3day</option>
							<option>4day</option>
						</select>
					</aside>
				</div>

				<div className={styles.userReview}>
					{userReview.map((data: any, index: any) => (
						<div className={styles.box} key={index}>
							<img src='/images' />
							<div>
								<h3>{data.title}</h3>
								<small>{data.tag}</small>
							</div>
							<div>
								<h4>{data.coin}</h4>
								<small>{data.dollar}</small>
							</div>
						</div>
					))}
				</div>
			</section>
			<section>
				<div className={styles.newsLetter}>
					<aside>
						<h3>Are you a digital creator?</h3>
						<p>
							Learn how Marketplace helps you prtect and sell your unique
							<br />
							digital creations, and join our growing community of thousand
							<br />
							digital creators.
						</p>
						<form>
							<input type='text' placeholder='Enter your email address' />
							<button>Subscribe</button>
							{/* <Image
								src='/images/pngwing.png'
								alt='hero'
								height={500}
								width={400}
								objectFit={'contain'}
							/> */}
							<img src='/images/pngwing.png' alt='' />
						</form>
					</aside>
				</div>
			</section>
		</section>
	);
}
