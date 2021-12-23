import { createGlobalStyle } from 'styled-components';
import { FontFamily, FontSize } from '../variables';
const { roboto, montserrat } = FontFamily;
const { fontReg } = FontSize;

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}
  html {
	  font-family: ${roboto};
    font-size: 10px; // 1rem === 10px
  }
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${montserrat};
    margin: 0;
  }

  p {
    font-family: ${roboto};
    font-size: ${fontReg};
    font-weight: 200;
  }

`;

export default GlobalStyles;
