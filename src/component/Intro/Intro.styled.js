import styled from 'styled-components';
import { Container } from '../shared/Wrapper';
import { FontSize, Color } from '../variables';
const { fontReg } = FontSize;
const { white } = Color;

export const StyledIntro = styled.div`
	li,
	p {
		color: ${({ theme }) => theme.text || white};
		font-size: ${fontReg};
	}
	figure {
		margin: 2rem 0 0;
		overflow: hidden;
		width: 100%;
		img {
			max-width: 100%;
		}
	}
`;

export const StyledContainer = styled(Container)`
	padding-top: 20rem;
`;
