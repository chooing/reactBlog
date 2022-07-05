import { useState } from 'react'
import styled from 'styled-components'
import MaxWidth from '../MaxWidth/MaxWidth'
import Logo from '../Logo/Logo'
import Logout from '../Login/Login'
import Login from '../Logout/Logout'

const HeaderStyle = styled.header`
    background: ${({theme}) => theme.whiteColor};
    
    & ul {
	display: flex;
	align-items: center;
	gap: 1rem;
    }
`;

const HeaderMaxWidth = styled(MaxWidth)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;
`

export default function Header() {
    const [isLogin, setIsLogin]=useState(false)

    return (
        <HeaderStyle>
            <HeaderMaxWidth>
                <Logo/>
                {isLogin?<Login isLogin={isLogin} setIsLogin={setIsLogin}/>:<Logout isLogin={isLogin} setIsLogin={setIsLogin}/>}
            </HeaderMaxWidth>
        </HeaderStyle>
    )
}
