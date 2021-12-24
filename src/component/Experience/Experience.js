import { FlexRow } from '../shared/Flex';
import { Row } from '../shared/Wrapper';
import { ExperienceArray } from '../../data/experience';
import { Container } from '../shared/Wrapper';
import { SectionTitle } from '../shared/Typography';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { DateList, DetailList } from './Experience.styled';
import { IconArrow } from '../shared/Icons';
import { StyledCard } from '../shared/Card';

const Experience = () => {
	const cards = ExperienceArray.map((el, index) => (
		<StyledCard key={`experience${index}`}>
			<DateList>
				<li>{el.dateStart}</li>
				<li>{el.dateEnd}</li>
				<IconArrow />
			</DateList>
			<Hr />
			<h4>{el.title}</h4>
			<h5>{el.company}</h5>
			<Hr />
			<h4>Technology used:</h4>
			<KeywordList>
				{el.keywords.map((word, i) => (
					<li key={`word-${i}`}>{word}</li>
				))}
			</KeywordList>
			<Hr />
			<DetailList>
				{el.details.map((detail, i) => (
					<li key={`detail-${i}`}>{detail}</li>
				))}
			</DetailList>
		</StyledCard>
	));

	return (
		<Row>
			<Container>
				<SectionTitle>Experience</SectionTitle>
				<FlexRow gap='2rem'>{cards}</FlexRow>
			</Container>
		</Row>
	);
};

export default Experience;
