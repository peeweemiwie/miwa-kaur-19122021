import { Grid } from '../shared/Grid';
import { SectionTitle } from '../shared/Typography';
import { Row, Container, ButtonContainer } from '../shared/Wrapper';
import { DesignSystemArray } from '../../data/portfolio';
import { Hr } from '../shared/Hr';
import { KeywordList } from '../shared/Lists';
import { CardTitle, StyledCard } from '../shared/Card';
import {
	AnchorButtonFilled,
	AnchorButtonOutline,
	LinkButtonUnderline,
} from '../shared/Buttons';
import { Color } from '../variables';
const { primary, dark, accent } = Color;

const Portfolio = () => {
	const cards = DesignSystemArray.map((app, index) => (
		<StyledCard key={`portfolio${index}`}>
			<CardTitle>{app.title}</CardTitle>
			<Hr bgColor={accent} />
			<figure>
				<img src={`${app.img.url}`} alt={`${app.img.alt}`} />
			</figure>
			<Hr bgColor={accent} />
			<h4>Technology used:</h4>
			<KeywordList>
				{app.keywords.map((word, i) => (
					<li key={`word-${i}`}>{word}</li>
				))}
			</KeywordList>
			<Hr bgColor={accent} />
			<ButtonContainer>
				<AnchorButtonFilled
					href={`${app.link}`}
					target='_blank'
					rel='noreferrer'
					color={dark}
				>
					View project
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
				<SectionTitle>Portfolio - Design System</SectionTitle>
				<StyledCard marginBottom='3rem'>
					<p>
						In the past, I used the CSS/classname approach, inspired by
						Bootstrap, to create a library. However my preference now is{' '}
						<strong>Component-Driven-Approach</strong>, using{' '}
						<strong>Styled-Components</strong>. Why? I love the fact that it is{' '}
						<strong>encapsulated styling, reusable, flexible</strong> and{' '}
						<strong>clean code</strong>. Here are some examples I have created.
						It is still very early stage but I would love to hear your
						<LinkButtonUnderline to='contact' color={primary}>
							feedback!
						</LinkButtonUnderline>
					</p>
				</StyledCard>
				<Hr bgColor={primary} />
				<Grid>{cards}</Grid>
			</Container>
		</Row>
	);
};

export default Portfolio;
