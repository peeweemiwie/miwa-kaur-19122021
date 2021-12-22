import { CardPortfolio } from './Portfolio.styled';
import { FlexRow } from '../shared/Flex';
import { SectionTitle, SectionSubTitle } from '../shared/Typography';
import { Row, Container } from '../shared/Wrapper';
import { AppArray } from '../../data/portfolio';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';

const Portfolio = () => {
	const cards = AppArray.map((app, index) => (
		<CardPortfolio key={`portfolio${index}`}>
			<SectionSubTitle>{app.title}</SectionSubTitle>
			<Hr />
			<figure>
				<img src={`${app.img.url}`} alt={`${app.img.alt}`} />
			</figure>
			<Hr />
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
		</CardPortfolio>
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
