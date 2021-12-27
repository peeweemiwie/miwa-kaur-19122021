import { FlexRow } from '../shared/Flex';
import { Container, Row, ButtonContainer } from '../shared/Wrapper';
import { ExperienceArray } from '../../data/experience';
import { SectionTitle } from '../shared/Typography';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { DateList, DetailList } from './Experience.styled';
import { IconArrow } from '../shared/Icons';
import { CardTitle, StyledCard } from '../shared/Card';
import { AnchorButtonOutline } from '../shared/Buttons';
import { Color } from '../variables';
const { primary } = Color;

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
				{el.projects &&
					el.projects.map((project, i) => (
						<li key={`project-${i}`}>Project name: {project.title}</li>
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
						<li>
							Experienced front end developer with <stron>UI/UX</stron> and{' '}
							<strong>Responsive Web Design</strong>
						</li>
						<li>
							In order to create robust applications I carefully communicate
							with stakeholders, enjoy giving and receiving feedback
						</li>
						<li>
							<strong>Bridge the gap between design and technology</strong> by
							building <strong>design system</strong>
						</li>
						<li>
							Experience working in numerous different environments - such as
							remote, solo designer / developer as well as in a large technology
							team of over 100 engineers
						</li>
					</DetailList>
					<ButtonContainer justifyContent='center'>
						<AnchorButtonOutline
							href='https://docs.google.com/document/d/e/2PACX-1vR7o1P_OCGkdVQ2zValck9CwjsnKzI_ofgAqIM7jGM8G2F9uqWZWIz05U_b13HS-OtDqn6SY9RFhcEr/pub'
							target='_blank'
							rel='noreferrer'
							color={primary}
						>
							View the resume
						</AnchorButtonOutline>
					</ButtonContainer>
				</StyledCard>
				<Hr />
			</Container>
			<FlexRow gap='2rem'>{cards}</FlexRow>
		</Row>
	);
};

export default Experience;
