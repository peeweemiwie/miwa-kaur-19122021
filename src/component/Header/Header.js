import { Container } from '../shared/Wrapper';
import logo from '../../img/logo.svg';
import {
	StyledHeader,
	StyledLogo,
	StyledNav,
	StyledNavLink,
} from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<header>
					<h1>
						<StyledLogo src={logo} alt='Logo: Miwa Yagi Kaur' />
						Miwa Yagi Kaur
					</h1>
					<h2>Design Technologist</h2>
				</header>
				<StyledNav>
					<StyledNavLink to='/'>Home</StyledNavLink>
					<StyledNavLink to='animation'>Animation</StyledNavLink>
					<StyledNavLink to='contact'>Contact</StyledNavLink>
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};
export default Header;
