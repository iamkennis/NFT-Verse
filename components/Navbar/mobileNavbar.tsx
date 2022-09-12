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
			<AiOutlineMenu className={styles.menuIcon} onClick={handleClick} />
			{!click && (
				<nav className={`${styles.mobileMenu}`} onClick={handleClick}>
					<FaTimes className={styles.menuIcon} onClick={handleClick} />
					<div>
						<div>
							<Logo />
						</div>

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
				</nav>
			)}
		</>
	);
}
