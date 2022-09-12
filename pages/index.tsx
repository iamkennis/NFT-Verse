import type { NextPage } from 'next'
import Auction from '../components/Auction/Auction';
import Drop from '../components/Drop/drop';
import Hero from '../components/Hero/Hero';
import UserCard from '../components/UserCard';
import Layout from '../layout'

const Home: NextPage = () => {
  return (
		<Layout>
			<Hero />
			<Drop />
		  <Auction />
		  <UserCard/>
		</Layout>
	);
}

export default Home
