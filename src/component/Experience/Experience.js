import { MdArrowBack } from 'react-icons/md';
// import { FlexRow } from '../shared/Flex';
import { Grid } from '../shared/Grid';
import { Container, Row, ButtonContainer } from '../shared/Wrapper';
import { ExperienceArray } from '../../data/experience';
import { SectionTitle } from '../shared/Typography';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { DateList, DetailList } from './Experience.styled';
import { Contents } from './Contents';
import { CardTitle, StyledCard } from '../shared/Card';
import { AnchorButtonOutline } from '../shared/Buttons';
import { Color } from '../variables';
const { primary } = Color;

const Experience = () => {
	const cards = ExperienceArray.map((el, index) => (
		<StyledCard key={`experience${index}`}>
			<DateList>
				<li>{el.dateEnd}</li>
				<li>{el.dateStart}</li>
				<MdArrowBack />
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
			<Hr />
		</StyledCard>
	));

	return (
		<Row>
			<Container>
				<SectionTitle>Experience</SectionTitle>
				<StyledCard>
					<CardTitle>Summary</CardTitle>
					<DetailList>
						<Contents />
					</DetailList>
					<ButtonContainer justifyContent='center'>
						<AnchorButtonOutline
							href='https://docs.google.com/document/d/e/2PACX-1vSRDpZItgFn9XNhtd9n7d2SkxlNpLB-9guZIdIPkkrHB3NoHYbBhiOOsH3uRnqHrgS7-bvyXsm2S4ye/pub'
							target='_blank'
							rel='noreferrer'
							color={primary}
						>
							View resume
						</AnchorButtonOutline>
					</ButtonContainer>
				</StyledCard>
				<Hr />
			</Container>
			<Grid>{cards}</Grid>
		</Row>
	);
};

export default Experience;
