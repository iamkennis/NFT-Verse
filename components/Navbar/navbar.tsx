import React from 'react';
import Link from 'next/link';
import { NavData } from '../../mocks/navdata';
import {CgSearch} from 'react-icons/cg'
import styles from '../../styles/navbar/navbar.module.scss'
import { motion } from 'framer-motion';



export default function Navbar():JSX.Element {
	return (
		<nav className={`container-fluid ${styles.nav}`}>
			<div className='row'>
				<div className='col-sm-4'>
					<h1>NTF Verse</h1>
				</div>
				<ul className='col-sm-4'>
					{NavData.map((data: any, index: any) => (
						<li key={index}>
							<Link href={`${data.path}`}>{data.title}</Link>
						</li>
					))}
				</ul>
				<div className={`col-sm-4 ${styles.btnSearch}`}>
				<form className={styles.form}>
					<span>
						<CgSearch />
					</span>
					<input type='search' placeholder='Search' />
				</form>
				<div className={styles.btn}>
					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Explore
					</motion.button>
				</div>
				</div>
			</div>
		</nav>
	);
}
