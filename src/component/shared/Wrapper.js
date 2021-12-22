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
	margin: 0;
	padding: 3rem 0;
	width: 100%;
`;
