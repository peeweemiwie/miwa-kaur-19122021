import styled from 'styled-components';
import { FontFamily, FontSize, Color, BorderRadius } from '../variables';
const { fontReg } = FontSize;
const { gray } = Color;
const { borderRadiusXl } = BorderRadius;
const { robotoMono } = FontFamily;

export const ListNoStyle = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const ListFlexRow = styled(ListNoStyle)`
	display: flex;
	flex-direction: row;
`;

export const KeywordList = styled(ListFlexRow)`
	flex-wrap: wrap;
	li {
		border: 1px solid ${gray};
		border-radius: ${borderRadiusXl};
		font-family: ${robotoMono};
		font-size: ${fontReg};
		margin: 0.2rem;
		padding: 0.2rem 0.8rem;
	}
`;
