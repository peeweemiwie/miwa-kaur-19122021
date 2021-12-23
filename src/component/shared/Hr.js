import styled from 'styled-components';
import { Color } from '../variables';

const { lightGray, primary } = Color;
const size = 8;
const half = size / 2;
export const Hr = styled.hr`
	height: 1px;
	border: 1px solid ${lightGray};
	margin: 3.2rem auto;
	position: relative;
	width: 80%;
	overflow: visible; /* For IE */
	&::after,
	::before {
		content: '';
		height: ${size}px;
		width: ${size}px;
		background-color: ${primary};
		border-radius: 50%;
		display: block;
		position: absolute;
		top: -${half}px;
	}
	&::before {
		left: -${size}px;
	}
	&::after {
		right: -${size}px;
	}
`;
