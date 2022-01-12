import { Grid } from '../shared/Grid';
import { AnimatePage } from './Page';

const AnimationPages = () => {
	return (
		<Grid>
			<AnimatePage action='expands' />
			<AnimatePage action='minimizes' />
			<AnimatePage action='flips' />
		</Grid>
	);
};

export default AnimationPages;
