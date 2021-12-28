import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Color, FontSize, BorderRadius } from '../variables';
const { primary, white } = Color;
const { fontReg } = FontSize;
const { borderRadiusLg } = BorderRadius;

const sharedStyle = css`
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: ${borderRadiusLg};
	color: ${({ color }) => color || white};
	font-size: ${fontReg};
	font-weight: 500;
	display: inline-flex;
	padding: 0.2rem 1.6rem;
	text-decoration: none;
	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out,
		filter 200ms ease-in-out;
	&:hover {
		transform: scale(1.05);
		box-shadow: ${({ theme }) => theme.shadow};
		filter: brightness(2);
	}
`;

export const Button = styled.button`
	${sharedStyle}
`;

export const LinkButton = styled(Link)`
	${sharedStyle}
`;

export const AnchorButton = styled.a`
	${sharedStyle}
`;

export const ButtonFilled = styled(Button)`
	background-color: ${({ bg }) => bg || primary};
`;

export const ButtonOutline = styled(Button)`
	border-color: ${({ borderColor }) => borderColor || primary};
`;

export const ButtonUnderline = styled(Button)`
	text-decoration: underline;
`;

export const AnchorButtonOutline = styled(AnchorButton)`
	border-color: ${({ borderColor }) => borderColor || primary};
`;

export const AnchorButtonFilled = styled(AnchorButtonOutline)`
	background-color: ${({ bg }) => bg || primary};
`;
export const AnchorButtonUnderline = styled(AnchorButton)`
	text-decoration: underline;
`;

export const LinkButtonFilled = styled(LinkButton)`
	background-color: ${({ bg }) => bg || primary};
`;

export const LinkButtonOutline = styled(LinkButton)`
	border-color: ${({ borderColor }) => borderColor || primary};
`;

export const LinkButtonUnderline = styled(LinkButton)`
	text-decoration: underline;
`;
