import { Container } from '../shared/Wrapper';
import { StyledHeader, StyledLogo } from './Header.styled';
import { LinkButtonText } from '../shared/Buttons';
import { Color } from '../variables';
import { Grid } from '../shared/Grid';
const { primary } = Color;

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<header>
					<StyledLogo src='./images/logo.svg' alt='Logo: Miwa Yagi Kaur' />
					<h1>Miwa Yagi Kaur</h1>
					<h2>Design Technologist</h2>
				</header>
				<nav>
					<Grid>
						<LinkButtonText to='/' color={primary}>
							Home
						</LinkButtonText>
						<LinkButtonText to='animation' color={primary}>
							Animation
						</LinkButtonText>
						<LinkButtonText to='contact' color={primary}>
							Contact
						</LinkButtonText>
					</Grid>
				</nav>
			</Container>
		</StyledHeader>
	);
};
export default Header;
