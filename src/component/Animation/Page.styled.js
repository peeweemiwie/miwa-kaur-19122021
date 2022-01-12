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
			transform: scale3D(5, 5, 5);
			opacity: 0;
		}
		80% {
			transform: scale3D(1, 1, 1);
			opacity: 0;
		}
		100% {
			opacity: 1;
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
		55% {
			transform: scale(1, 1);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes flips {
		0% {
			transform: rotateX(0);
			opacity: 1;
		}
		25% {
			opacity: 0;
		}
		50% {
			transform: rotateY(180deg);
			opacity: 0;
		}
		55% {
			transform: rotateX(0);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
