import styled from 'styled-components';
import { Color, FontSize, BorderRadius } from '../variables';
const { borderRadiusMd, borderRadiusXl } = BorderRadius;
const { fontReg, fontLg } = FontSize;
const { white, lightGray } = Color;
export const CardTitle = styled.h4``;

export const StyledCard = styled.div`
	background-color: ${({ theme }) => theme.cardBg};
	border-radius: ${borderRadiusMd};
	box-shadow: ${({ theme }) => theme.shadow};
	color: ${white};
	padding: 1.2rem;
	min-width: ${({ minWidth }) => minWidth || 'auto'};
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
	${CardTitle} {
		color: ${white};
		font-size: ${fontLg};
		font-weight: 400;
	}
`;
