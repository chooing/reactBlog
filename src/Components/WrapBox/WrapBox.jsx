import styled,{ css } from "styled-components"

const AddStyle = css`
    width: 91.2rem;
    max-width: 100%;
    margin: -30rem 0 auto auto;
    padding: 8rem;
    @media ${({theme})=>theme.desktopS} {
        padding: 6rem;
    }
    @media ${({theme})=>theme.mobileM} {
        padding: 4rem;
    }
`
const WrapBoxStyle = styled.section`
	position: relative;
	width: 60rem;
	max-width: calc(100% - 4rem);
	margin: -22rem auto 0;
	padding: 8rem 0;
	border-radius: ${({theme}) => theme.borderRadius};
	background: ${({theme}) => theme.whiteColor};
	font-size: 4rem;
	transition: all 0.3s;

    & h2 {
        margin-bottom: ${({whereIn})=>(whereIn==='view')? '0' : '4.8rem'};
        font-size: 3.2rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    & ul { margin-bottom: 2.4rem; }
    & ul li:not(:first-child) { margin-top: 4rem; }

    
    @media ${({theme})=>theme.desktopS} {
        margin-top: ${({whereIn})=>(whereIn==='view')? null : '-35rem'};
        width: ${({whereIn})=>(whereIn==='view'||whereIn==='write')? '100%' : null};
    }
    
    ${({whereIn})=>(whereIn==='view'||whereIn==='write'||whereIn==='mypage')? AddStyle : null}
`;

export default function WrapBox({ whereIn, children }){

    return(
        <WrapBoxStyle whereIn={whereIn}>
            {children}
        </WrapBoxStyle>
    )
};