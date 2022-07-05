import MaxWidth from '../MaxWidth/MaxWidth'
import TopBtn from '../Button/TopBtn'
import styled from 'styled-components'

const FooterStyle = styled.footer`
	background: ${({theme})=>theme.whiteColor};
	margin-top: 10rem;

    & h2 { color: ${({theme})=>theme.grayColor}; }
`;

const FooterMaxWidth=styled(MaxWidth)`
    display: flex;
	align-items: center;
	justify-content: center;
	height: 8rem;
	position: relative;
`;


export default function Footer() {
    return (
        <FooterStyle>
            <FooterMaxWidth>
                <h2>©Weniv Corp.</h2>
                <TopBtn/>
            </FooterMaxWidth>
        </FooterStyle>
    )
}
