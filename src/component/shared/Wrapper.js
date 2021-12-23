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
`;

export const StyledPage = styled.div`
	background-color: ${({ theme }) => theme.pageBg};
	display: flex;
	flex-direction: column;
	margin: 0;
	min-height: 100vh;
	padding: 0 0 3rem;
`;
