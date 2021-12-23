import { FlexRow } from '../shared/Flex';
import { Container } from '../shared/Wrapper';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FlexRow>
					<div>Miwa Yagi Kaur</div>
					<div>
						<button>Contact Us</button>
					</div>
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
						facilis excepturi similique illo harum mollitia dicta ut autem,
						quaerat sunt.
					</div>
				</FlexRow>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
