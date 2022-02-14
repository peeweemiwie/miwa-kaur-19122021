import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './component/theme';
import Header from './component/Header/Header';
import GlobalStyles from './component/shared/Global';
import { StyledPage } from '../src/component/shared/Wrapper';
import Home from '../src/component/Home/Home';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Animation from './component/Animation/Animation';
import NotFound from './component/NotFound/NotFound';
import BackToTop from './component/BackToTop/BackToTop';
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyles />
				<StyledPage>
					<Header />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='animation' element={<Animation />} />
							<Route path='contact' element={<Contact />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
					<BackToTop />
				</StyledPage>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
