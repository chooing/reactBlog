import { Link as ReactRouterDomLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import ArrowLeft from '../../assets/ArrowLeft-blue.svg';

const Link = ({ isView, children, ...props }) => {
	return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
}

const BackBtnStyle = styled(Link)`
	width: 6.4rem;
	height: 6.4rem;
    border-radius: 0 ${({theme})=>theme.borderRadius} ${({theme})=>theme.borderRadius} 0;
    background-color: ${({theme})=>theme.grayBackground};
    background-image: url(${ArrowLeft});
    background-repeat: no-repeat;
    background-position: 50% 50%;
	background-size: 4rem;
	font-size: 1.6rem;
    ${({isView})=>isView?ViewBackBtn:null}
`;

const ViewBackBtn = css`
	position: absolute;
	top: 8rem;
	left: 0;

    @media ${({theme})=>theme.desktopS} {
		top: 6rem;
		width: 5.2rem;
		height: 5.2rem;
    }
    
    @media ${({theme})=>theme.mobileM} {
		top: 4rem;
    }
`;

const BtnText = styled.span`
    ${({theme})=>theme.a11yHidden()}
`;

export default function BackBtn({isView}) {
    return (
        <BackBtnStyle to='/' isView={isView}>
            <BtnText>Back</BtnText>
        </BackBtnStyle>
    )
}
