import styled from 'styled-components';
import { Row } from '../shared/Wrapper';
import { FontSize, FontFamily } from '../variables';

const { fontMd, fontReg } = FontSize;
const { Quicksand } = FontFamily;
export const StyledHeader = styled(Row)`
	background-color: ${({ theme }) => theme.pageBg};
	padding: 3rem 0 0;
	header {
		align-items: baseline;
		display: grid;
		grid-template-columns: 6rem auto auto;
		gap: 2.4rem;
	}
	h1,
	h2 {
		font-weight: 300;
	}
	h1,
	h2,
	p {
		color: ${({ theme }) => theme.text};
	}

	h1 {
		font-family: ${Quicksand};
		font-size: 7rem;
	}

	h2 {
		font-size: ${fontMd};
		text-align: right;
	}
	p {
		font-size: ${fontReg};
	}
`;
