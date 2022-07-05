import Category from '../Category/Category'
import Author from '../Author/Author';
import {Link} from 'react-router-dom'
import styled,{ css } from 'styled-components';

const PostLink = styled(Link)`
	display: block;
	overflow: hidden;
	border-radius: ${({theme})=>theme.borderRadius};
	background: ${({theme})=>theme.whiteColor};
	font-size: 2rem;
`;

const ThumImg = styled.img` width: 100%; `;

const ContentsWrap= styled.div`
    padding: 1.6rem 2.4rem 2.4rem;
`;

const TextShortening = css`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
`;

const Title = styled.h3`
    ${TextShortening}
	height: calc(1.8rem * 1.4 * 2);
	margin: 1rem 0;
	font-size: 1.8rem;
	font-weight: bold;
	-webkit-line-clamp: 2;
	letter-spacing: -0.02em;

    @media ${({theme})=>theme.mobileS}{
        height: auto;
		-webkit-line-clamp: 1;
    }
`;

const Description = styled.p`
    ${TextShortening}
    height: calc(1.4rem * 1.4 * 3);
	margin-top: 1.6rem;
	color: ${({theme})=>theme.grayColor};
	font-size: 1.4rem;
	-webkit-line-clamp: 3;
	text-indent: 0.5em;

    @media ${({theme})=>theme.mobileS}{
        height: auto;
		-webkit-line-clamp: 2;
    }
`;

export default function PostCard({title,author, postImg, categories,createdDate,description,index,profileImg}) {
    let url = `${process.env.PUBLIC_URL}/assets/${postImg}`;

    return (
        <li >
            <PostLink to={`/postView/${index}`}>
                <article>
                    <ThumImg src={url} alt="" />
                    <ContentsWrap>
                        <Category categories={categories}/>
                        <Title>{title}</Title>
                        <Author profileImg={profileImg} author={author} created={createdDate}/>
                        <Description>{description}</Description>
                    </ContentsWrap>
                </article>
            </PostLink>
        </li>
    )
}
