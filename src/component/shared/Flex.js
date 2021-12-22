import styled from 'styled-components';

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: ${(props) => (props.gap ? props.gap : 0)};
	& > * {
		flex: 1;
	}
`;
