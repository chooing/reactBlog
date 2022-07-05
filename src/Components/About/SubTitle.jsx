import styled, { css } from "styled-components";

const BasicStyle = css`
    margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
`;

const TitleH2 = styled.h2`${BasicStyle}`
const TitleH3 = styled.h3`
    ${BasicStyle}
    margin-top: 6rem;
`
export default function SubTitle({isH2, children}){
    return (
        (isH2)?
        <TitleH2>{children}</TitleH2>
        :<TitleH3>{children}</TitleH3>
    );
}