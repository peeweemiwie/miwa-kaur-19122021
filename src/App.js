import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './component/theme';
import Header from './component/Header/Header';
import GlobalStyles from './component/shared/Global';
import Experience from './component/Experience/Experience';
import Portfolio from './component/Portfolio/Portfolio';
import PortfolioDesign from './component/Portfolio/PortfolioDesign';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyles />
				<>
					<Header />
					<Experience />
					<Portfolio />
					<PortfolioDesign />
				</>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
