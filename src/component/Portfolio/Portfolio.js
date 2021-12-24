import { FlexRow } from '../shared/Flex';
import { SectionTitle } from '../shared/Typography';
import { Row, Container, ButtonContainer } from '../shared/Wrapper';
import { AppArray } from '../../data/portfolio';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { CardTitle, StyledCard } from '../shared/Card';
import { AnchorButtonFilled, AnchorButtonOutline } from '../shared/Buttons';
import { Color } from '../variables';
const { primary, dark } = Color;

const Portfolio = () => {
	const cards = AppArray.map((app, index) => (
		<StyledCard key={`portfolio${index}`}>
			<CardTitle>{app.title}</CardTitle>
			<Hr />
			<figure>
				<img src={`${app.img.url}`} alt={`${app.img.alt}`} />
			</figure>
			<Hr />
			<h4>Technology used:</h4>
			<KeywordList>
				{app.keywords.map((word, i) => (
					<li key={`word-${i}`}>{word}</li>
				))}
			</KeywordList>
			<Hr />
			<ButtonContainer>
				<AnchorButtonFilled
					href={`${app.link}`}
					target='_blank'
					rel='noreferrer'
					color={dark}
				>
					View the project
				</AnchorButtonFilled>
			</ButtonContainer>
			<ButtonContainer>
				<AnchorButtonOutline
					href={`${app.github}`}
					target='_blank'
					rel='noreferrer'
					color={primary}
				>
					View GitHub repo
				</AnchorButtonOutline>
				{app.figma && (
					<AnchorButtonOutline
						href={`${app.figma}`}
						target='_blank'
						rel='noreferrer'
						color={primary}
					>
						View Figma
					</AnchorButtonOutline>
				)}
			</ButtonContainer>
		</StyledCard>
	));

	return (
		<Row>
			<Container>
				<SectionTitle>Portfolio - React Apps</SectionTitle>
				<FlexRow gap='2rem'>{cards}</FlexRow>
			</Container>
		</Row>
	);
};

export default Portfolio;
