import React from 'react'
import Logo from '../../shared/svg/logo'
import styles from '../../styles/footer/footer.module.scss'


export default function Footer() {
  return (
		<footer className={`container ${styles.footer}`}>
			<div className='row'>
				<div className={`col-sm-5 ${styles.footerLogo}`}>
					<Logo />
					<p>
						The worlds largest digital marketpalce for
						<br />
						crypto collectibities and non-fungible
						<br /> tokens(NFTs) Buy, Sell and discover
						<br />
						exclusive digital assets.
					</p>
					<div className={styles.footerIcons}>
						<img src='/images/meta.svg' />
						<img src='/images/ame.svg' />
						<img src='/images/Frame.svg' />
						<img src='/images/Fra.svg' />
					</div>
				</div>
				<div className={`col-sm-7 ${styles.footerNav}`}>
					<ul>
						<p>Explore</p>
						<li>Art</li>
						<li>Photography</li>
						<li>Music</li>
						<li>Games</li>
					</ul>
					<ul>
						<p>My account</p>
						<li>My profile</li>
						<li>My collection</li>
						<li>My favourite</li>
						<li>My settings</li>
					</ul>
					<ul>
						<p>Resources</p>
						<li>Help center</li>
						<li>Partner</li>
						<li>Suggestions</li>
						<li>Newsletter</li>
					</ul>
					<ul>
						<p>Company</p>
						<li>About</li>
						<li>Careers</li>
						<li>Rankings</li>
						<li>Activity</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
