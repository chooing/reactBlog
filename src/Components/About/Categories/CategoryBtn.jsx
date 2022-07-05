import { Link } from "react-router-dom"
import styled from "styled-components"

const CategoryStyle = styled.ul`    
    & a {
        background: ${({theme})=>theme.grayBackground};
        color: ${({theme})=>theme.grayText};
        font-size: 1.2rem;
        border-radius:${({theme})=>`calc(${theme.borderRadius} * 2)`};
        padding: 0.2rem 1.2rem;
    }
`;


export default function CategoryBtn({aLink, text}) {
    return (
        <CategoryStyle><Link to={aLink}>{text}</Link></CategoryStyle>
    )
}
