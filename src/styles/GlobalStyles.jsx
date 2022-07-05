import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};

h1,
a,
div,
p,
section,
article,
input,
textarea {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	line-height: 1.4;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button {
	cursor: pointer;
}

a {
	border-radius: 0.8rem;
	overflow: hidden;
}
img {
	vertical-align: bottom;
}

a:focus,
input:focus,
button:focus,
textarea:focus {
	outline: 3px solid ${({theme}) => theme.mainColorOp20};
	box-shadow: 0 0 0 1px ${({theme}) => theme.outlineBorder};
}

body {
	background: ${({theme}) => theme.grayBackgroundLight};
}
`

export default GlobalStyles;