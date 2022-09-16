import React from 'react';
import styles from '../../styles/user/user.module.scss';

import { motion } from 'framer-motion';
import { userReview } from '../../mocks/user';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function UserCard() {
	return (
		<div className={`container ${styles.useboxes}`}>
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
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={transition}
							className={styles.box}
							key={index}>
							{/* <div> */}
							<img src={data.img} />
							{/* </div> */}
							<div style={{ marginRight: '30px' }}>
								<h3>{data.title}</h3>
								<small>{data.tag}</small>
							</div>
							<div style={{ paddingRight: '20px' }}>
								<h4>{data.coin}</h4>
								<small>{data.dollar}</small>
							</div>
						</motion.div>
					))}
				</div>
			</section>
			<section>
				<div className={styles.newsLetter}>
					<aside>
						<div className={styles.newsbox}>
							<h3>Are you a digital creator?</h3>
							<p>
								Learn how Marketplace helps you prtect and sell your unique
								<br />
								digital creations, and join our growing community of thousand
								<br />
								digital creators.
							</p>
							<form>
								<input type='email' placeholder='Enter your email address' />
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={transition}>
									Subscribe
								</motion.button>
							</form>
						</div>
						<div className={styles.bgImg}>
							<img src='/images/gloss.png' alt='' />
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
}
