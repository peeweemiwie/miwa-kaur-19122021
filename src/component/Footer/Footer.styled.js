import styled from 'styled-components';
import { Color, FontSize } from '../variables';
const { lightGray, cardBg } = Color;
const { fontReg, fontMd } = FontSize;

export const StyledFooter = styled.footer`
	background-color: ${({ bgColor }) => bgColor || cardBg};
	color: ${lightGray};
	font-size: ${fontReg};
	margin-top: auto;
	padding: 3rem 0;
	small {
		display: block;
		text-align: center;
		margin-top: 2rem;
	}
`;

export const MediaLinks = styled.div`
	a {
		font-size: ${fontMd};
	}
`;
