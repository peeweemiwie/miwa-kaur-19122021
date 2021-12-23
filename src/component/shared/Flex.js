import styled from 'styled-components';

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-wrap: ${(props) => (props.wrap ? props.wrap : 'nowrap')};
	column-gap: ${(props) => (props.gap ? props.gap : 0)};
	row-gap: ${(props) => (props.rowGap ? props.rowGap : 0)};
	& > * {
		flex: 1;
	}
`;
