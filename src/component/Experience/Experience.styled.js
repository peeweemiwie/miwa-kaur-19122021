import styled from 'styled-components';
import { Row } from '../shared/Wrapper';
import { DefaultCard } from '../Card/Card.styled';
import { ListFlexRow } from '../shared/Lists';
import { FontSize, Color } from '../variables';
const { fontMd, fontReg, fontLg } = FontSize;
const { accent } = Color;

export const DateList = styled(ListFlexRow)`
	justify-content: space-between;
	position: relative;
	.icon {
		color: ${accent};
		font-size: ${fontLg};
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	li {
		font-size: ${fontMd};
	}
`;

export const DetailList = styled.ul`
	padding-left: 0.8rem;
	list-style: none;

	li {
		font-size: ${fontReg};
		line-height: 1.25;
		margin: 1.2rem 0;
		position: relative;
		text-indent: 1em;
		&::before {
			content: '• ';
			color: ${accent};
			font-size: 2.4rem;
			position: absolute;
			left: -16px;
			top: -6px;
		}
		&::first-letter {
		}
	}
`;

export const CardExperience = styled(DefaultCard)`
	h4,
	h5 {
		font-size: ${fontReg};
		margin: 0.5rem 0;
	}
	h4 {
		font-weight: 500;
	}
	h5 {
		font-weight: 300;
	}
`;

export const ExperienceComponent = styled(Row)`
	h3 {
		margin-bottom: 3rem;
	}
`;
