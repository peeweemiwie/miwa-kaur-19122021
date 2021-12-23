import { FlexRow } from '../shared/Flex';
import { SectionTitle } from '../shared/Typography';
import { Row, Container } from '../shared/Wrapper';
import { AppArray } from '../../data/portfolio';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { CardTitle, StyledCard } from '../Card/Card.styled';

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
			<p>
				<a href={`${app.link}`} target='_blank' rel='noreferrer'>
					View the project
				</a>
			</p>
			<p>
				<a href={`${app.github}`} target='_blank' rel='noreferrer'>
					View GitHub repo
				</a>
			</p>
			{app.figma && (
				<p>
					<a href={`${app.figma}`} target='_blank' rel='noreferrer'>
						View Figma
					</a>
				</p>
			)}
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
