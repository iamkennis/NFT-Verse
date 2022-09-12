import React from 'react'
import styles from '../../styles/user/user.module.scss';

import { motion } from 'framer-motion';
import { userReview } from '../../mocks/user';

export default function UserCard() {
  return (
		<div className='container'>
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
							<input type='email' placeholder='Enter your email address' />
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Subscribe
							</motion.button>
							<img src='/images/gloss.png' alt='' />
						</form>
					</aside>
				</div>
			</section>
		</div>
	);
}
