import React from 'react'
import styles from '../../styles/hero/hero.module.scss'
import { statData } from '../../mocks/header';

export default function Hero() {
  return (
		<header className={`container ${styles.hero}`}>
			<div className='row'>
			  <div className='col-sm-6'>
				  <img src="" />
				</div>
				<div className='col-sm-6'>
					<h1>Discover, and sell Extraordinary NFTs</h1>
					<span>
						<img />
						<img />
					</span>
					<button>Explore Now</button>
					<div>
						{statData.map((data: any, _index: any) => (
							<span key={_index}>
								<p>{data.total}</p>
								<p>{data.title}</p>
							</span>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
