import { useState } from 'react';
import { StyledPage } from './Page.styled';
import { ButtonFilled } from '../shared/Buttons';
import { Color } from '../variables';
import { Grid } from '../shared/Grid';

const AnimatePage = ({ action }) => {
	const [num, setNum] = useState(1);
	const [animationName, setAnimationName] = useState('');

	const handleClick = (event) => {
		const target = event.target;
		target.disabled = true;
		setNum(num + 1);
		setAnimationName(action);
		setTimeout(() => {
			setAnimationName('');
			target.disabled = false;
		}, 1000);
	};
	return (
		<StyledPage className={animationName}>
			<h4>Question {num}</h4>
			<p>
				When you click the button, it <strong>{action}</strong> this card
			</p>
			<ButtonFilled onClick={handleClick} color={Color.gray} disabled={false}>
				{action}
			</ButtonFilled>
		</StyledPage>
	);
};

export const AnimationPages = () => {
	return (
		<Grid>
			<AnimatePage action='expands' />
			<AnimatePage action='minimizes' />
			<AnimatePage action='flips' />
		</Grid>
	);
};
