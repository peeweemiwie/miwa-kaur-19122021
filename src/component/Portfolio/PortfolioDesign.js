import { FlexRow } from '../shared/Flex';
import { SectionTitle } from '../shared/Typography';
import { Row, Container, ButtonContainer } from '../shared/Wrapper';
import { DesignArray } from '../../data/portfolio';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { CardTitle, StyledCard } from '../shared/Card';
import { AnchorButtonFilled } from '../shared/Buttons';
import { Color } from '../variables';
const { dark } = Color;

const PortfolioDesign = () => {
	const cards = DesignArray.map((el, index) => (
		<StyledCard key={`portfolioDesign${index}`}>
			<CardTitle>{el.title}</CardTitle>
			<Hr />
			<figure>
				<img src={`${el.img.url}`} alt={`${el.img.alt}`} />
			</figure>
			<Hr />
			<h4>Technology used:</h4>
			<KeywordList>
				{el.keywords.map((word, i) => (
					<li key={`word-design-${i}`}>{word}</li>
				))}
			</KeywordList>
			<Hr />
			<ButtonContainer>
				<AnchorButtonFilled
					to={`${el.link.url}`}
					target='_blank'
					rel='noreferrer'
					color={dark}
				>
					View the {el.link.device} design
				</AnchorButtonFilled>
				{el.link2 && (
					<AnchorButtonFilled
						to={`${el.link2.url}`}
						target='_blank'
						rel='noreferrer'
						color={dark}
					>
						View the {el.link2.device} design
					</AnchorButtonFilled>
				)}
			</ButtonContainer>
		</StyledCard>
	));

	return (
		<Row>
			<Container>
				<SectionTitle>Portfolio - UI/UX Design</SectionTitle>
				<FlexRow gap='2rem'>{cards}</FlexRow>
			</Container>
		</Row>
	);
};

export default PortfolioDesign;
