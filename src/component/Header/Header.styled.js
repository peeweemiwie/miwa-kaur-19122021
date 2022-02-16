import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Row } from '../shared/Wrapper';
import { sharedStyle } from '../shared/Buttons';
import { FontSize, FontFamily, Color } from '../variables';
const { fontMd } = FontSize;
const { Quicksand } = FontFamily;
const { primary, blue, success } = Color;

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
	position: fixed;
	text-align: center;
	width: 100vw;
	z-index: 10;
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
		a,
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

		a {
			text-decoration: none;
			img {
				backface-visibility: hidden;
				transform: rotateX(0);
				transition: transform 1s ease-in-out;
			}
			&:hover {
				img {
					transform: rotateX(1turn);

					/* transform: translate(2rem, 2rem); */
				}
			}
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
			animation: navBg 10s infinite alternate;
			background-image: linear-gradient(45deg, ${primary}, ${blue}, ${success});
			background-size: 300%;
			bottom: -${activeBorderHeight};
			content: '';
			height: ${activeBorderHeight};
			position: absolute;
			width: 100%;
		}
	}
	@keyframes navBg {
		from {
			background-position: left;
		}
		to {
			background-position: right;
		}
	}
`;
export const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 12rem));
	justify-content: center;
	margin-top: 1rem;
`;
