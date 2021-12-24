// import { Link } from 'react-router-dom';
import { FlexRow } from '../shared/Flex';
import { StyledFooter } from './Footer.styled';
import { LinkButtonFilled } from '../shared/Buttons';
import { Container } from '../shared/Wrapper';
import { Color } from '../variables';
const { dark } = Color;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FlexRow>
					<div>Miwa Yagi Kaur</div>
					<div>
						<LinkButtonFilled color={dark} to='contact'>
							Contact Us
						</LinkButtonFilled>
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
