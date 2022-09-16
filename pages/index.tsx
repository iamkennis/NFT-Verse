import type { NextPage } from 'next'
import Auction from '../components/Auction/Auction';
import Drop from '../components/Drop/drop';
import Hero from '../components/Hero/Hero';
import UserCard from '../components/UserCard';
import Layout from '../layout'
import { AnimatePresence } from 'framer-motion';


const Home: NextPage = () => {
  return (
		<Layout>
			<AnimatePresence>
				<Hero />
				<Drop />
				<Auction />
				<UserCard />
			</AnimatePresence>
		</Layout>
	);
}

export default Home
