import styled from 'styled-components';
import { Breakpoints } from '../variables';

const { breakpointMd } = Breakpoints;
export const MobileOnly = styled.div`
	@media (min-width: ${breakpointMd}) {
		display: none;
	}
`;
export const ExcludeMobile = styled.div`
	@media (max-width: ${breakpointMd}) {
		display: none;
	}
`;
