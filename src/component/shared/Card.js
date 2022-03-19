import styled from 'styled-components';
import { Color, FontSize, BorderRadius } from '../variables';
const { borderRadiusMd, borderRadiusXl } = BorderRadius;
const { fontReg, fontLg } = FontSize;
const { white, lightGray } = Color;
export const CardTitle = styled.h4``;
export const FigureHalf = styled.figure``;

export const DefaultCard = styled.div`
	background-color: ${({ theme }) => theme.cardBg};
	border-radius: ${borderRadiusMd};
	box-shadow: ${({ theme }) => theme.shadow};
	color: ${white};
	padding: 1.2rem;
	li {
		font-weight: 200;
	}
	margin-bottom: ${({ marginBottom }) => marginBottom || 0};
`;

export const StyledCard = styled(DefaultCard)`
	min-width: ${({ minWidth }) => minWidth || 'auto'};
	text-align: ${({ textAlign }) => textAlign || 'left'};
	h4,
	h5 {
		font-size: ${fontReg};
		margin: 0.5rem 0;
	}
	h4 {
		font-weight: 500;
	}
	h5 {
		font-weight: 300;
	}
	p {
		font-size: 2rem;
		line-height: 1.5;
	}
	figure {
		border: 3px solid ${lightGray};
		border-radius: ${borderRadiusXl};
		margin: 0;
		overflow: hidden;
		width: 100%;
		img {
			max-width: 100%;
		}
	}
	${FigureHalf} {
		border: 3px solid ${lightGray};
		border-radius: ${borderRadiusXl};
		margin: 0 auto;
		overflow: hidden;
		width: 50%;
		img {
			max-width: 100%;
		}
	}
	${CardTitle} {
		color: ${white};
		font-size: ${fontLg};
		font-weight: 400;
	}
`;
