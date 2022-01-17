import styled from 'styled-components';
import { Color } from '../variables';
const { lightGray, gray, navy, black } = Color;

export const Bubbles = styled.div`
	background-color: ${gray};
	background-image: linear-gradient(45deg, ${gray}, ${navy}, ${black});
	background-size: 300%;
	border: 5px solid gray;
	height: auto;
	overflow: hidden;
	perspective: 800px;
	transform-style: preserve-3d;
	animation: bgColor 3s infinite alternate;
	&.paused {
		animation-play-state: paused;
		span:nth-of-type(4n + 1),
		span:nth-of-type(4n + 2),
		span:nth-of-type(4n + 3),
		span:nth-of-type(4n + 4) {
			animation-play-state: paused;
		}
	}
	&.running {
		animation-play-state: running;
		span:nth-of-type(4n + 1),
		span:nth-of-type(4n + 2),
		span:nth-of-type(4n + 3),
		span:nth-of-type(4n + 4) {
			animation-play-state: running;
		}
	}
	span {
		background-color: ${lightGray};
		border-radius: 50%;
		display: inline-block;
		margin: 2rem;
	}
	span:nth-of-type(4n + 1) {
		animation: bubblesUp 18s infinite;
	}

	span:nth-of-type(4n + 2) {
		animation: bubblesDown 18s infinite 2s;
	}

	span:nth-of-type(4n + 3) {
		animation: bubblesRight 18s infinite 4s;
	}

	span:nth-of-type(4n + 4) {
		animation: bubblesLeft 18s infinite 6s;
	}

	@keyframes bgColor {
		from {
			background-position: left;
		}
		to {
			background-position: right;
		}
	}

	@keyframes bubblesUp {
		0% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
		50% {
			opacity: 0;
			transform: scale3D(3, 3, 3) translateY(-20rem);
		}
		100% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
	}

	@keyframes bubblesDown {
		0% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
		50% {
			opacity: 0;
			transform: scale3D(3, 3, 3) translateY(20rem);
		}
		100% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
	}

	@keyframes bubblesRight {
		0% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
		50% {
			opacity: 0;
			transform: scale3D(5, 5, 5) translateX(20rem);
		}
		100% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
	}

	@keyframes bubblesLeft {
		0% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
		50% {
			opacity: 0;
			transform: scale3D(5, 5, 5) translateX(-20rem);
		}
		100% {
			opacity: 1;
			transform: scale3D(1, 1, 1);
		}
	}
`;
