import React, { useState } from 'react';
import Link from 'next/link';
import { NavData } from '../../mocks/navdata';
import { CgSearch } from 'react-icons/cg';
import styles from '../../styles/navbar/navbar.module.scss';
import { motion } from 'framer-motion';
import Logo from '../../shared/svg/logo';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes, FaGripLines } from 'react-icons/fa';

export default function MobileNavbar() {
    const [click, setClick] = useState<boolean>(true);
		const handleClick = () => setClick(!click);

  return (
		<>
			<div onClick={handleClick}>
				<svg
					id={styles.menuIcon}
					xmlns='http://www.w3.org/2000/svg'
					className='h-8 w-8 lg:hidden cursor-pointer hover:text-dirtywhite'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h8m-8 6h16'
					/>
				</svg>
			</div>
			{/* <AiOutlineMenu /> */}
			{!click && (
				<motion.nav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={`${styles.mobileMenu}`}
					onClick={handleClick}>
					<div className={styles.menuTimes} onClick={handleClick}>
						<FaTimes />
					</div>

					<div>
						<div>
							<Logo />
						</div>

					  <div className={styles.space}>
							<ul>
								{NavData.map((data: any, index: any) => (
									<li key={index}>
										<Link href={`${data.path}`}>{data.title}</Link>
									</li>
								))}
							</ul>

							<div className={`${styles.btnSearch}`}>
								<form className={styles.form}>
									<span>
										<CgSearch />
									</span>
									<input type='search' placeholder='Search' />
								</form>
								<div className={styles.btn}>
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}>
										Explore
									</motion.button>
								</div>
							</div>
						</div>
					</div>
				</motion.nav>
			)}
		</>
	);
}
