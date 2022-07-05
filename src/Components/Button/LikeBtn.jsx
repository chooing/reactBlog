import styled from "styled-components"
import LikeIcon from '../../assets/icon-like.svg';
import LikeHoverIcon from '../../assets/icon-like-white.svg';

const LikeBtnStyle = styled.button`
	width: 12rem;
	height: 4rem;
	padding-left: 3rem;
	border: 1px solid ${({theme})=>`rgba(${theme.redRgb}, 0.5)`};
	border-radius: ${({theme})=>theme.borderRadius};
	transition: all 0.3s;

    background-color: ${({theme})=>theme.whiteColor};
    background-image: url(${LikeIcon});
    background-repeat: no-repeat;
    background-position: 2.5rem 50%;
	background-size: 2.4rem;

    &:hover,
    &.active {
        background-color: ${({theme})=>theme.redColor};
        background-image: url(${LikeHoverIcon});
        color: ${({theme})=>theme.whiteColor};
    }
    &:focus {
        outline-color: ${({theme})=>`rgba(${theme.redRgb}, 0.2)`};
        box-shadow: none;
    }
`;


export default function LikeBtn() {
    return <LikeBtnStyle>Like</LikeBtnStyle>

}
