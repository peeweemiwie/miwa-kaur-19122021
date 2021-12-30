import styled from 'styled-components';
import { Row } from '../shared/Wrapper';
import { FontSize, FontFamily, Breakpoints } from '../variables';
const { fontMd } = FontSize;
const { Quicksand } = FontFamily;
const { breakpointMd } = Breakpoints;

export const StyledLogo = styled.img`
	grid-area: logo;
	height: auto;
	position: absolute;
	top: 50%;
	transform: translate(1.6rem, -50%);
	width: max(4vw, 6rem);
`;

export const StyledHeader = styled(Row)`
	background-color: ${({ theme }) => theme.cardBg};
	margin: 0 auto;
	padding: 1rem 0;
	position: relative;
	width: 100vw;
	&::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -1rem;
		left: 0;
		width: 100vw;
		height: 1rem;
		background: rgb(26, 26, 26);
		background: linear-gradient(
			to bottom,
			rgba(26, 26, 26, 1) 0%,
			rgba(26, 26, 26, 0) 100%
		);
	}
	header {
		display: grid;
		grid-template-areas: 'logo header1' 'logo header2';
		grid-template-columns: 11rem 1fr;
		position: relative;
		@media (min-width: ${breakpointMd}) {
			grid-template-columns: 14rem 1fr;
		}
	}
	h1,
	h2 {
		color: ${({ theme }) => theme.text};
		font-weight: 300;
	}

	h1 {
		font-family: ${Quicksand};
		font-size: clamp(4rem, 5vw, 7rem);
		grid-area: header1;
	}

	h2 {
		font-size: ${fontMd};
		grid-area: header2;
	}
`;
