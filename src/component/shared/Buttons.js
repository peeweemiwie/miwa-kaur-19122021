import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Color, FontSize, BorderRadius } from '../variables';
const { primary, white, gray } = Color;
const { fontReg } = FontSize;
const { borderRadiusLg } = BorderRadius;

export const sharedStyle = css`
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: ${borderRadiusLg};
	color: ${({ color }) => color || white};
	font-size: ${({ fontSize }) => fontSize || fontReg};
	font-weight: 500;
	display: inline-flex;
	padding: 0.4rem 1.6rem;
	text-decoration: none;
	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out,
		filter 200ms ease-in-out;
	&:hover {
		transform: scale(1.05);
		box-shadow: ${({ theme }) => theme.shadow};
		filter: brightness(1);
	}
	&:disabled {
		cursor: not-allowed;
		&:hover {
			transform: none;
			box-shadow: none;
			filter: none;
		}
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
	color:  ${({ color }) => color || white};
	transition: color: 200ms ease-in-out;
	&:hover {
		color: ${gray};
	}
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

export const LinkButtonText = styled(LinkButton)`
	text-decoration: none;
`;
