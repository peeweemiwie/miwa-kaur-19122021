import styled from 'styled-components';
import { Color, FontSize } from '../variables';

const { fontLg } = FontSize;
const { lightGray, white } = Color;
export const SectionTitle = styled.h3`
	color: ${lightGray};
	font-size: 6rem;
	text-align: right;
`;
export const SectionSubTitle = styled.h4`
	color: ${white};
	font-size: ${fontLg};
	font-weight: 400;
`;
