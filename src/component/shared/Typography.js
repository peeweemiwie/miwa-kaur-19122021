import styled from 'styled-components';
import { Color, FontSize } from '../variables';
const { fontXl, fontXxl } = FontSize;
const { lightGray } = Color;

export const SectionTitle = styled.h3`
	color: ${lightGray};
	font-size: clamp(${fontXl}, 5vw, ${fontXxl});
	margin-bottom: 2rem;
	text-align: right;
`;
