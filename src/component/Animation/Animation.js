import { Row, Container } from '../shared/Wrapper';
import { SectionTitle } from '../shared/Typography';
import AnimationBubbles from './AnimationBubbles';
import AnimationPages from './AnimationPages';
import { Hr } from '../shared/Hr';

const Animation = () => {
	return (
		<Row>
			<Container>
				<SectionTitle>Animation </SectionTitle>
				<AnimationBubbles />
				<Hr />
				<AnimationPages />
			</Container>
		</Row>
	);
};

export default Animation;
