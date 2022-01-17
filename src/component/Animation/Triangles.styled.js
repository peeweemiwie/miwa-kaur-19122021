import styled, { css } from 'styled-components';
import { Color } from '../variables';
const { primary } = Color;

export const variables = {
	root3: 1.73,
	height: 200,
	get halfHeight() {
		return this.height / 2;
	},
	get width() {
		return (this.height / 2) * this.root3;
	},
	get wrapperSize() {
		return this.height * 2;
	},
};

const baseTriangle = css`
	border-style: solid;
	border-color: transparent;
	border-bottom-width: 100px;
	border-top-width: 100px;
	height: 0;
	position: absolute;
	width: 0;
	animation-delay: ${({ delay }) => delay}s;
`;

const triangle = styled.div`
	${baseTriangle}
`;

export const TriangleRight = styled(triangle)`
	border-right-style: solid;
	border-right-color: ${primary};
	border-right-width: ${variables.width}px;
	filter: brightness(${({ amount }) => amount});
	left: ${({ left }) => left}px;
	top: ${({ top }) => top}px;
`;

export const TriangleLeft = styled(triangle)`
	border-left-style: solid;
	border-left-color: ${primary};
	border-left-width: ${variables.width}px;
	filter: brightness(${({ amount }) => amount});
	left: ${({ left }) => left}px;
	top: ${({ top }) => top}px;
`;

export const Wrapper = styled.div`
	height: ${variables.wrapperSize}px;
	margin: 2rem 0;
	position: relative;
	width: ${variables.wrapperSize}px;
`;
