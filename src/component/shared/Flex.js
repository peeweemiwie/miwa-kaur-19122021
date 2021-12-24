import styled from 'styled-components';

export const DefaultFlexBox = styled.div`
	display: flex;
	flex-wrap: ${(props) => (props.wrap ? props.wrap : 'nowrap')};
	column-gap: ${(props) => (props.colGap ? props.colGap : '2rem')};
	row-gap: ${(props) => (props.rowGap ? props.rowGap : 0)};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'flex-start'};
	align-items: ${(props) => (props.alignItems ? props.alignItems : 'stretch')};
`;

export const FlexColumn = styled(DefaultFlexBox)`
	flex-direction: column;
`;

export const FlexRow = styled(DefaultFlexBox)`
	& > * {
		flex: ${({ flex }) => (flex ? flex : 1)};
	}
`;
