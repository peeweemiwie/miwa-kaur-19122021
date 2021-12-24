import { ExcludeMobile, MobileOnly } from '../shared/Responsive';
import { SectionTitle } from '../shared/Typography';
import { Container, Row } from '../shared/Wrapper';
import { FlexRow } from '../shared/Flex';
import { LinkButtonFilled } from '../shared/Buttons';
import { Color } from '../variables';
const { dark } = Color;
const Contact = () => {
	return (
		<Row>
			<Container>
				<SectionTitle>Contact us</SectionTitle>
				<FlexRow>
					<ExcludeMobile>
						<iframe
							src='https://docs.google.com/forms/d/e/1FAIpQLSdxwkhOFCFE3DOQVwkHLi86nzDj4_hM1OkpKoE_beGGmMcGZg/viewform?embedded=true'
							width='640'
							height='845'
							frameBorder='0'
							marginHeight='0'
							marginWidth='0'
							title='Email us - desktop version'
						>
							Loading…
						</iframe>
					</ExcludeMobile>
					<MobileOnly>
						<iframe
							src='https://docs.google.com/forms/d/e/1FAIpQLSdxwkhOFCFE3DOQVwkHLi86nzDj4_hM1OkpKoE_beGGmMcGZg/viewform?embedded=true'
							width='400'
							height='845'
							frameborder='0'
							marginHeight='0'
							marginWidth='0'
							title='Email us - mobile version'
						>
							Loading…
						</iframe>
					</MobileOnly>
					<div>
						<LinkButtonFilled color={dark} to='/'>
							Back to Home
						</LinkButtonFilled>
					</div>
				</FlexRow>
			</Container>
		</Row>
	);
};

export default Contact;
