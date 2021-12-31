import {
	FaGithub,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
	FaRegEnvelope,
} from 'react-icons/fa';
import { Grid } from '../shared/Grid';
import { MediaLinks, StyledFooter } from './Footer.styled';
import { AnchorButton, LinkButtonUnderline } from '../shared/Buttons';
import { Container, ButtonContainer } from '../shared/Wrapper';
import { Color } from '../variables';
const { primary } = Color;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Grid>
					<MediaLinks>
						<ButtonContainer justifyContent='center'>
							<AnchorButton
								href='https://github.com/peeweemiwie/miwa-kaur-19122021'
								target='_blank'
								rel='noreferrer'
								color={primary}
							>
								<FaGithub />
							</AnchorButton>
							<AnchorButton
								href='https://www.linkedin.com/in/miwayagi/'
								target='_blank'
								rel='noreferrer'
								color={primary}
							>
								<FaLinkedin />
							</AnchorButton>
							<AnchorButton
								href='https://www.youtube.com/channel/UCYgA0xoTDkBGKDKRevWIweA'
								target='_blank'
								rel='noreferrer'
								color={primary}
							>
								<FaYoutube />
							</AnchorButton>
							<AnchorButton
								href='https://www.instagram.com/miwakaurskitchen/'
								target='_blank'
								rel='noreferrer'
								color={primary}
							>
								<FaInstagram />
							</AnchorButton>
						</ButtonContainer>
					</MediaLinks>
					<div>
						Would you like to find out more about Miwa? <br />
						Feel free to
						<LinkButtonUnderline color={primary} to='contact'>
							<ButtonContainer alignItems='flex-end'>
								<FaRegEnvelope />
								Contact Us
							</ButtonContainer>
						</LinkButtonUnderline>
					</div>
					<div>
						<AnchorButton
							href='https://github.com/peeweemiwie/miwa-kaur-19122021'
							target='_blank'
							rel='noreferrer'
							color={primary}
						>
							View code from GitHub <FaGithub />
						</AnchorButton>
					</div>
				</Grid>
				<small>Miwa Yagi Kaur - All rights reserved 2022</small>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
