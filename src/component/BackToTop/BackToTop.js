import styled from 'styled-components';
import { Color } from '../variables';
import { AnchorButtonFilled } from '../shared/Buttons';
import { FaArrowAltCircleUp } from 'react-icons/fa';
const { darkGray, accent } = Color;

export const BtnBackToTop = styled(AnchorButtonFilled)`
	background-color: ${accent};
	/* color: ${darkGray}; */
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	opacity: 0.8;
	padding: 0.3rem;
	font-size: 3rem;
	border-radius: 50%;
`;

const BackToTop = () => {
	return (
		<BtnBackToTop href='#'>
			<FaArrowAltCircleUp />
		</BtnBackToTop>
	);
};

export default BackToTop;
