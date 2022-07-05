import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ModifyIcon from '../../assets/icon-modify.svg'
import ModifyHoverIcon from '../../assets/icon-modify-white.svg'

const ModifyBtnStyle = styled(Link)`
	width: 4rem;
	height: 4rem;
	border: 0;
	transition: all 0.3s;
    right: 13rem;
    border-radius: ${({theme})=>theme.borderRadius};
    background-color: ${({theme})=>theme.grayBackground};
    background-image: url(${ModifyIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
	background-size: 1.6rem;

    &:hover {
        background-color: ${({theme})=>theme.mainColor};
        background-image: url(${ModifyHoverIcon});
    }
`;

const BtnText = styled.span`
    ${({theme})=>theme.a11yHidden()}
`;

export default function ModifyBtn() {
    return (
        <ModifyBtnStyle to="/">
            <BtnText>modify</BtnText>
        </ModifyBtnStyle>
    )
}
