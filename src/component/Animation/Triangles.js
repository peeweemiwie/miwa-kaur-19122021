import { useState } from 'react';
import { CardTitle, StyledCard } from '../shared/Card';
import { Grid } from '../shared/Grid';
import { DefaultFlexBox } from '../shared/Flex';
import { ButtonFilled } from '../shared/Buttons';
import { Wrapper } from './Triangles.styled';
import {
	BottomLeft,
	BottomRight,
	MiddleLeft,
	MiddleRight,
	TopLeft,
	TopRight,
} from './TriangleParts';
import './Triangles.scss';
import { Color } from '../variables';

const Triangles = () => {
	return (
		<StyledCard>
			<DefaultFlexBox justifyContent='center'>
				<CardTitle>Triangles</CardTitle>
				<Wrapper className='wrapper'>
					<TopLeft />
					<MiddleLeft />
					<BottomLeft />
					<TopRight />
					<MiddleRight />
					<BottomRight />
				</Wrapper>
			</DefaultFlexBox>
		</StyledCard>
	);
};

const TriangleAnimation = () => {
	const defaultValue = 0.5;
	const [speed, setSpeed] = useState(defaultValue);
	const [extra, setExtra] = useState(defaultValue);
	const [className, setClassName] = useState('paused');
	const base = 1;

	const changeHandler = (e) => {
		setSpeed(e.currentTarget.value);
	};
	const handleClick = (e) => {
		e.target.disabled = true;
		const timeout = (speed * 10 + base) * 1000;
		setExtra(speed);
		setClassName('running');
		setTimeout(() => {
			setClassName('paused');
			e.target.disabled = false;
		}, timeout);
	};

	return (
		<StyledCard>
			<DefaultFlexBox justifyContent='center'>
				<CardTitle>Triangle Animation</CardTitle>
				<Wrapper className='triangle-animation'>
					<TopLeft delay={base} className={className} />
					<MiddleLeft delay={base + extra * 3} className={className} />
					<BottomLeft delay={base + extra * 2} className={className} />
					<TopRight delay={base + extra * 5} className={className} />
					<MiddleRight delay={base + extra * 4} className={className} />
					<BottomRight delay={base + extra * 1} className={className} />
				</Wrapper>
				<div>
					<label htmlFor='speed'>
						<CardTitle>Animation speed</CardTitle>
					</label>
					<DefaultFlexBox justifyContent='space-between'>
						<input
							type='range'
							name='speed'
							id='speed'
							min='0.1'
							max='1'
							step='0.1'
							defaultValue={defaultValue}
							onChange={changeHandler}
						/>
						<ButtonFilled onClick={handleClick} color={Color.gray}>
							Play
						</ButtonFilled>
					</DefaultFlexBox>
				</div>
			</DefaultFlexBox>
		</StyledCard>
	);
};

const TriangleVariations = () => {
	return (
		<Grid>
			<Triangles />
			<TriangleAnimation />
		</Grid>
	);
};

export default TriangleVariations;
