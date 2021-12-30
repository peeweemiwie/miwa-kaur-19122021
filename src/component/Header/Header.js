import { Container } from '../shared/Wrapper';
import { StyledHeader, StyledLogo } from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<header>
					<StyledLogo src='./images/logo.svg' alt='Logo: Miwa Yagi Kaur' />
					<h1>Miwa Yagi Kaur</h1>
					<h2>Design Technologist</h2>
				</header>
			</Container>
		</StyledHeader>
	);
};
export default Header;
