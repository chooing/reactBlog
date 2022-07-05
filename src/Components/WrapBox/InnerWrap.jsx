import styled, { css } from "styled-components"

const Inner = styled.div`
    width: 39.2rem;
    max-width: calc(100% - 8rem);
    margin: 0 auto;
    font-size: 1.6rem;
    ${({isView})=>(isView)?InViewInner:null}
`;

const InViewInner = css`
	width: 100%;
	max-width: 100%;
`

export default function InnerWrap({ children, isView }){
    return(
        <Inner isView={isView}>
            {children}
        </Inner>
    )
};
