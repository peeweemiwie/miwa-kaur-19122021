import styled from 'styled-components';
import { StyledCard } from '../shared/Card';

export const StyledPage = styled(StyledCard)`
	border: 1px solid gray;
	text-align: center;
	&.expands {
		animation: expands 1s ease-in-out forwards;
	}
	&.minimizes {
		animation: minimizes 1s ease-in-out forwards;
	}
	&.flips {
		backface-visibility: hidden;
		animation: flips 1s ease-in-out forwards;
	}

	@keyframes expands {
		0% {
			transform: scale3D(1, 1, 1);
			opacity: 1;
		}
		30% {
			opacity: 0;
		}
		70% {
			transform: scale3D(3, 3, 3);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes minimizes {
		0% {
			transform: scale(1, 1);
			opacity: 1;
		}
		25% {
			opacity: 0;
		}
		50% {
			transform: scale(0, 0);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes flips {
		from {
			transform: rotateY(0);
		}
		50% {
			transform: rotateY(180deg);
		}
		to {
			transform: rotateY(0);
		}
	}
`;
