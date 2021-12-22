import { Logo } from '../Logo/Logo';
import { Container } from '../shared/Wrapper';
import { StyledHeader } from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<header>
					<Logo />
					<h1>Miwa Yagi Kaur</h1>
					<h2>Design Technologist</h2>
				</header>
			</Container>
		</StyledHeader>
	);
};
export default Header;
