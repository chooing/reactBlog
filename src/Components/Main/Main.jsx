import styled from "styled-components";
import MaxWidth from '../MaxWidth/MaxWidth'
import About from "../About/About";
import Posts from "../Posts/Posts";

const MainWrap = styled(MaxWidth)`
    display: flex;
    flex-direction: row-reverse;
    gap: 2.4rem;
    position: relative;

    @media ${({theme})=>theme.desktopS} {
		flex-direction: column;
    }
`;

export default function Main() {
    
    return (
        <main>
            <MainWrap>
                <Posts/>
                <About/>
            </MainWrap>
        </main>
    )
}
