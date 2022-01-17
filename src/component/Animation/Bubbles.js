import { useState } from 'react';
import { StyledCard, CardTitle } from '../shared/Card';
import { Bubbles } from './Bubbles.styled';
import { ButtonFilled } from '../shared/Buttons';
import { DefaultFlexBox } from '../shared/Flex';
import { Color } from '../variables';

const AnimationBubbles = () => {
	const [isRunning, setIsRunning] = useState(false);
	let ranNum = null;
	const ranNumArray = [...Array(50).keys()].map((num) => {
		ranNum = Math.floor(Math.random() * 100);
		return (
			<span
				key={`bubble${num}`}
				style={{ height: `${ranNum}px`, width: `${ranNum}px` }}
			></span>
		);
	});
	const handleClick = () => {
		isRunning ? setIsRunning(false) : setIsRunning(true);
	};

	return (
		<StyledCard>
			<DefaultFlexBox alignItems='center'>
				<CardTitle>Bubbles</CardTitle>
				<ButtonFilled onClick={handleClick} color={Color.gray}>
					{isRunning ? 'Pause' : 'Run'} animation
				</ButtonFilled>
			</DefaultFlexBox>
			<Bubbles className={isRunning ? 'running' : 'paused'}>
				{ranNumArray}
			</Bubbles>
		</StyledCard>
	);
};

export default AnimationBubbles;
