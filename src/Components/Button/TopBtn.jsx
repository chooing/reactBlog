import styled from 'styled-components'
import ArrowTopIcon from '../../assets/ArrowTop.svg';

const TopBtnStyle = styled.button`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 6.4rem;
	height: 6.4rem;
	padding-top: 2.2rem;
	border: 0;
	border-radius: ${({theme})=>theme.borderRadius} ${({theme})=>theme.borderRadius} 0 0;
    background-color: ${({theme})=>theme.mainColor};
    background-image: url(${ArrowTopIcon});
    background-repeat: no-repeat;
    background-position: 50% 0.4rem;
	background-size: 4rem;
	color:${({theme})=>theme.whiteColor};
	text-align: center;
	font-weight: bold;
`;

export default function TopBtn() {
    return <TopBtnStyle>TOP</TopBtnStyle>
}
