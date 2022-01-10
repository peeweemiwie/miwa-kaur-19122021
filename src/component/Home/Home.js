import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioDesign from '../Portfolio/PortfolioDesign';
import PortfolioDesignSystem from '../Portfolio/PortfolioDesignSystem';
import Intro from '../Intro/Intro';
const Home = () => {
	return (
		<>
			<Intro />
			<Experience />
			<Portfolio />
			<PortfolioDesignSystem />
			<PortfolioDesign />
		</>
	);
};

export default Home;
