import { useState } from 'react';
import { StyledIntro } from './Intro.styled';
import { InitialContent, MoreContent } from './Contents';
import Img from '../../img/miwa2-bw-sq.jpg';
import { ButtonContainer, Container, Row } from '../shared/Wrapper';
import { SectionTitle } from '../shared/Typography';
import { keywordsArray } from '../../data/keywords';
import { KeywordList } from '../shared/Lists';
import { FlexRow } from '../shared/Flex';
import { ButtonUnderline, LinkButtonOutline } from '../shared/Buttons';
import { Hr } from '../shared/Hr';
import { DefaultCard } from '../shared/Card';
import { Color } from '../variables';
const { primary } = Color;

const Intro = () => {
	const [readMore, setReadMore] = useState(true);
	const keywords = keywordsArray.map((keyword, index) => (
		<li key={`keyword${index}`}>{keyword}</li>
	));
	const HandleClick = () => {
		readMore ? setReadMore(false) : setReadMore(true);
	};

	return (
		<Row>
			<Container>
				<SectionTitle>Hi there!</SectionTitle>
				<StyledIntro>
					<DefaultCard>
						<FlexRow colGap='2rem' flex='auto'>
							<div>
								<InitialContent />
								{!readMore && <MoreContent />}
								<ButtonUnderline color={primary} onClick={HandleClick}>
									Read {readMore ? 'more' : 'less'}
								</ButtonUnderline>
							</div>
							<figure>
								<img src={Img} alt='Miwa Kaur' />
							</figure>
						</FlexRow>
						<Hr />
						<p>Here are some of the technologies I use:</p>
						<KeywordList>{keywords}</KeywordList>
						<Hr />
						<ButtonContainer justifyContent='center'>
							<LinkButtonOutline to='contact' color={primary}>
								Contact
							</LinkButtonOutline>
						</ButtonContainer>
					</DefaultCard>
				</StyledIntro>
			</Container>
		</Row>
	);
};

export default Intro;
