import { useState, useEffect } from 'react';
import { StyledIntro, StyledContainer } from './Intro.styled';
import { InitialContent, MoreContent } from './Contents';
import Img from '../../img/miwa2-bw-sq.jpg';
import { ButtonContainer, Row } from '../shared/Wrapper';
import { SectionTitle } from '../shared/Typography';
import { keywordsArray } from '../../data/keywords';
import { KeywordList } from '../shared/Lists';
import { ButtonUnderline, LinkButtonOutline } from '../shared/Buttons';
import { Hr } from '../shared/Hr';
import { DefaultCard } from '../shared/Card';
import { Color } from '../variables';
import { Grid } from '../shared/Grid';
const { primary, accent } = Color;

const Intro = () => {
	const [readMore, setReadMore] = useState(true);
	const keywords = keywordsArray.map((keyword, index) => (
		<li key={`keyword${index}`}>{keyword}</li>
	));
	const HandleClick = () => {
		readMore ? setReadMore(false) : setReadMore(true);
	};

	let intro = document.querySelector('#intro');
	const options = {
		rootMargin: '-170px 0px 0px 0px',
		threshold: 0,
	};
	const toggleStyle = entries => {
		entries.forEach(entry => console.log(entry));
	};
	const observer = new IntersectionObserver(toggleStyle, options);

	if (intro) observer.observe(intro);
	useEffect(() => {
		console.log(intro);
	});

	return (
		<Row>
			<StyledContainer id='intro'>
				<SectionTitle>Hi there!</SectionTitle>
				<StyledIntro>
					<DefaultCard>
						<Grid>
							<figure>
								<img src={Img} alt='Miwa Kaur' />
							</figure>
							<InitialContent />
							{!readMore && <MoreContent />}
						</Grid>
						<ButtonContainer justifyContent='flex-end'>
							<ButtonUnderline color={primary} onClick={HandleClick}>
								Read {readMore ? 'more' : 'less'}
							</ButtonUnderline>
						</ButtonContainer>
						<Hr bgColor={accent} />
						<p>Here are some of the technologies I use lately:</p>
						<KeywordList>{keywords}</KeywordList>
						<Hr bgColor={accent} />
						<ButtonContainer justifyContent='center'>
							<LinkButtonOutline to='contact' color={primary}>
								Please feel free to say hi!
							</LinkButtonOutline>
						</ButtonContainer>
					</DefaultCard>
				</StyledIntro>
			</StyledContainer>
		</Row>
	);
};

export default Intro;
