import { FlexRow } from '../shared/Flex';
import { SectionTitle } from '../shared/Typography';
import { Row, Container, Overflow } from '../shared/Wrapper';
import { codepen } from '../../data/codepen';
import { StyledCard } from '../Card/Card.styled';

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
		</Row>
	);
};

export default PortfolioDesign;
