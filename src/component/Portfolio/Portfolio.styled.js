import styled from 'styled-components';
import { DefaultCard } from '../Card/Card.styled';
import { FontSize, Color } from '../variables';
const { fontMd, fontReg, fontLg } = FontSize;
const { white, primary } = Color;

export const CardPortfolio = styled(DefaultCard)`
	figure {
		margin: 0;
		width: 100%;
		img {
			max-width: 100%;
		}
	}
	a {
		color: ${primary};
		font-size: ${fontReg};
	}
`;
