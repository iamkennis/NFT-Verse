import React from 'react'
import Drop from '../components/Drop/drop'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/navbar'
import styles from '../styles/layout/layout.module.scss'

export default function Layout() {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Hero />
			<Drop />
			<Footer />
		</div>
	);
}
