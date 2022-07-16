import React from 'react'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar'
import styles from '../styles/layout/layout.module.scss'

interface Props { 
	children: React.ReactNode
}

export default function Layout({children}:Props ){
	return (
		<div className={styles.layout}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
