import { Row, Container } from '../shared/Wrapper';
import { SectionTitle } from '../shared/Typography';
import AnimationBubbles from './Bubbles';
import { AnimationPages } from './Page';
import { Hr } from '../shared/Hr';
import TriangleVariations from './Triangles';

const Animation = () => {
	return (
		<Row>
			<Container>
				<SectionTitle>Animation </SectionTitle>
				<AnimationBubbles />
				<Hr />
				<AnimationPages />
				<Hr />
				<TriangleVariations />
			</Container>
		</Row>
	);
};

export default Animation;
