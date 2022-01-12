import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Row } from '../shared/Wrapper';
import { sharedStyle } from '../shared/Buttons';
import { FontSize, FontFamily, Color } from '../variables';
const { fontMd } = FontSize;
const { Quicksand } = FontFamily;
const { primary, accent } = Color;

export const StyledLogo = styled.img`
	grid-area: logo;
	height: auto;
	margin-right: 1rem;
	width: max(4vw, 3rem);
`;

const activeBorderHeight = '4px';
export const StyledHeader = styled(Row)`
	background-color: ${({ theme }) => theme.cardBg};
	margin: 0 auto;
	padding: 1rem 0 ${activeBorderHeight};
	position: relative;
	text-align: center;
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
		h1,
		h2 {
			color: ${({ theme }) => theme.text};
			font-weight: 300;
		}

		h1 {
			font-family: ${Quicksand};
			font-size: clamp(4rem, 5vw, 7rem);
		}

		h2 {
			font-size: ${fontMd};
		}
	}
`;

export const StyledNavLink = styled(NavLink)`
	${sharedStyle}
	color: ${primary};
	justify-content: center;
	padding: 1rem;
	&.active,
	&:hover,
	&:active {
		box-shadow: none;
	}
	&.active {
		position: relative;
		&::after {
			background: ${accent};
			background: linear-gradient(
				to right,
				${accent} 25%,
				${primary} 25%,
				${primary} 75%,
				${accent} 75%
			);
			bottom: -${activeBorderHeight};
			content: '';
			height: ${activeBorderHeight};
			position: absolute;
			width: 100%;
		}
	}
`;
export const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 12rem));
	justify-content: center;
	margin-top: 1rem;
`;
