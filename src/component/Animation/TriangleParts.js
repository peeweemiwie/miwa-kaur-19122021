import { TriangleLeft, TriangleRight, variables } from './Triangles.styled';
const { height, halfHeight, width } = variables;

export const TopLeft = ({ delay, playState, className }) => (
	<TriangleRight
		amount='1'
		left='0'
		top='0'
		delay={delay}
		playState={playState}
		className={className}
	/>
);

export const MiddleLeft = ({ delay, playState, className }) => (
	<TriangleLeft
		amount='.6'
		left='0'
		top={halfHeight}
		delay={delay}
		playState={playState}
		className={className}
	/>
);

export const BottomLeft = ({ delay, playState, className }) => (
	<TriangleRight
		amount='.25'
		left='0'
		top={height}
		delay={delay}
		playState={playState}
		className={className}
	/>
);

export const TopRight = ({ delay, playState, className }) => (
	<TriangleLeft
		amount='.8'
		left={width}
		top='0'
		delay={delay}
		playState={playState}
		className={className}
	/>
);

export const MiddleRight = ({ delay, playState, className }) => (
	<TriangleRight
		amount='.5'
		left={width}
		top={halfHeight}
		delay={delay}
		playState={playState}
		className={className}
	/>
);

export const BottomRight = ({ delay, playState, className }) => (
	<TriangleLeft
		amount='.15'
		left={width}
		top={height}
		delay={delay}
		playState={playState}
		className={className}
	/>
);
