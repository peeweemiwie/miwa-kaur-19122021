import { FlexRow } from '../shared/Flex';
import { SectionTitle } from '../shared/Typography';
import { Row, Container, Overflow, ButtonContainer } from '../shared/Wrapper';
import { codepen } from '../../data/codepen';
import { StyledCard } from '../shared/Card';
import { AnchorButtonOutline } from '../shared/Buttons';
import { Color } from '../variables';

const PortfolioDesign = () => {
	const cards = codepen.map((el, index) => (
		<StyledCard key={`portfolioCodepen${index}`} minWidth='30rem'>
			<iframe
				height={el.height}
				style={{ width: '100%' }}
				scrolling='no'
				title={el.title}
				src={`https://codepen.io/peeweemiwie/embed/${el.slugHash}?default-tab=result`}
				frameBorder='no'
				loading='lazy'
				allowtransparency='true'
				allowFullScreen={true}
			>
				See the Pen{' '}
				<a href={`https://codepen.io/peeweemiwie/pen/${el.slugHash}`}>
					CSS-animation bubbles
				</a>{' '}
				by Miwa Yagi (<a href='https://codepen.io/peeweemiwie'>@peeweemiwie</a>)
				on <a href='https://codepen.io'>CodePen</a>.
			</iframe>
		</StyledCard>
	));

	return (
		<Row>
			<Container>
				<SectionTitle>Portfolio - Creative Coding</SectionTitle>
			</Container>
			<Overflow>
				<FlexRow gap='2rem' rowGap='2rem'>
					{cards}
				</FlexRow>
			</Overflow>
			<ButtonContainer justifyContent='center'>
				<AnchorButtonOutline
					href='https://codepen.io/peeweemiwie'
					color={Color.primary}
					target='_blank'
					rel='noreferrer'
				>
					View more from Codepen
				</AnchorButtonOutline>
			</ButtonContainer>
		</Row>
	);
};

export default PortfolioDesign;
