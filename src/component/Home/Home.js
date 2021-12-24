import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioDesign from '../Portfolio/PortfolioDesign';
import PortfolioCodepen from '../Portfolio/PortfolioCodepen';
import Intro from '../Intro/Intro';
const Home = () => {
	return (
		<>
			<Intro />
			<Experience />
			<Portfolio />
			<PortfolioDesign />
			<PortfolioCodepen />
		</>
	);
};

export default Home;
