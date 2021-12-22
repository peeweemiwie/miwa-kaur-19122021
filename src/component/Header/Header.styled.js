import styled from 'styled-components';
import { Row } from '../shared/Wrapper';
import { FontSize, FontFamily } from '../variables';

const { fontXl, fontMd } = FontSize;
const { Quicksand } = FontFamily;
export const StyledHeader = styled(Row)`
	background-color: ${({ theme }) => theme.pageBg};
	padding: 3rem 0;
	header {
		align-items: end;
		display: grid;
		grid-template-columns: 6rem auto auto;
		gap: 2.4rem;
		h1,
		h2 {
			color: ${({ theme }) => theme.text};
		}

		h1 {
			font-family: ${Quicksand};
			font-size: 7rem;
			font-weight: 300;
		}

		h2 {
			font-size: ${fontMd};
			font-weight: 300;
		}
	}
`;
