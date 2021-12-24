import styled from 'styled-components';
import { Color } from '../variables';
const { darkGray } = Color;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

export const Row = styled.div`
	background-color: ${({ bg }) => bg || darkGray};
	margin: 0 0 5rem;
	padding: 3rem 0;
	width: 100vw;
`;

export const Overflow = styled.div`
	overflow: ${({ overflow }) => overflow || 'scroll'};
	margin-bottom: 3rem;
`;

export const StyledPage = styled.div`
	background-color: ${({ theme }) => theme.pageBg};
	display: flex;
	flex-direction: column;
	margin: 0;
	min-height: 100vh;
	padding: 0 0 3rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	column-gap: ${({ cGap }) => cGap || '0.8rem'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	row-gap: ${({ cGap }) => cGap || '0.8rem'};
	margin-bottom: 1.6rem;
`;
