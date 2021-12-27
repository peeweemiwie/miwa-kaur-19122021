import styled from 'styled-components';
import { Row } from '../shared/Wrapper';
import { FontSize, FontFamily } from '../variables';
const { fontMd } = FontSize;
const { Quicksand } = FontFamily;

export const StyledHeader = styled(Row)`
	background-color: ${({ theme }) => theme.cardBg};
	margin: 0 auto;
	padding: 3rem 0;
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
		align-items: baseline;
		display: grid;
		grid-template-columns: 6rem auto auto;
		gap: 2.4rem;
	}
	h1,
	h2 {
		font-weight: 300;
	}
	h1,
	h2,
	p {
		color: ${({ theme }) => theme.text};
	}

	h1 {
		font-family: ${Quicksand};
		font-size: 7rem;
	}

	h2 {
		font-size: ${fontMd};
		text-align: right;
	}
`;
