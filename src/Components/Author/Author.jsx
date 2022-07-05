import styled, { css } from "styled-components";

const ViewAuthor = css`
	height: 6.4rem;
	font-size: 1.4rem;

	@media ${({theme})=>theme.desktopS} {
		height: 5.2rem;
		margin-bottom: 1rem;
    }
	@media ${({theme})=>theme.mobileM} {
		margin-bottom: 1rem;
		padding-left: 3rem;
    }
`
const AuthorWrap = styled.dl`
	display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;
    
    & dd {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    ${({isView})=>isView?ViewAuthor:null}
`;

const TitleDt = styled.dt`
    ${({theme})=>theme.a11yHidden()}
`;

const AuthorDd = styled.dd`
    & img {
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
`;

const CreatedDd = styled.dd`
    &::before {
        content: "";
        display: block;
        width: 1px;
        height: 0.8em;
        margin-right: 1rem;
        background: ${({theme})=>theme.borderColor};
    }
`;


export default function Author({profileImg, author, created, isView}) {
	const PROFILE_URL =  `${process.env.PUBLIC_URL}/assets/${profileImg}`;

    return (
        <AuthorWrap isView={isView}>
            <TitleDt>Author</TitleDt>
            <AuthorDd><img src={PROFILE_URL} alt="" />{author}</AuthorDd>
            <TitleDt>Created</TitleDt>
            <CreatedDd>{created}</CreatedDd>
        </AuthorWrap>
    )
}
