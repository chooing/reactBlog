import styled, { css } from "styled-components";

const TitleDt = styled.dt`
    ${({theme})=>theme.a11yHidden()}
`;

const ViewCategory = css`
    margin: 2rem 0 1rem 0;
`;

const CategoryWrap = styled.dl`
	display: flex;
	flex-wrap: wrap;
	color:  ${({theme})=>theme.mainColor};
    ${({isView})=>isView?ViewCategory:null};
    
    & dd {
        margin-right: 0.4rem;
        padding: 0.2rem 1.2rem;
        font-size: 1.2rem;
        background-color: ${({theme})=>theme.grayBackground};
        border-radius: ${({theme}) => `calc(${theme.borderRadius}*2)`};
    }
`;            

export default function Category({categories, isView}) {
    return (
        <CategoryWrap isView={isView}>
            <TitleDt>Category</TitleDt>
            {categories.map(theme => <dd key={theme}>{theme}</dd>)}

        </CategoryWrap>
    )
}
