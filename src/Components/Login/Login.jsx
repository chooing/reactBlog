import loginIcon from '../../assets/icon-login.svg';
import joinIcon from '../../assets/icon-register.svg';
import Button from '../Button/Button'
import styled from 'styled-components'

const OnlyPc=styled.li`
    @media ${({theme}) => theme.mobileM} {
        display: none;
    }
`;


export default function Login({isLogin, setIsLogin}) {

    const handleOnClickLogin=()=>{
        setIsLogin(!isLogin);
    }
    return (
        <ul>
            <li>
                <Button colorType={'gray'} isInHeader isLink to={'/'} onClick={handleOnClickLogin}>
                <img src={loginIcon} alt=""/>
                <span>Login</span>
                </Button>
            </li>
            <OnlyPc>

                <Button colorType={'gray'} isInHeader isLink to={'/'} >
                <img src={joinIcon} alt=""/>
                <span>Register</span>
                </Button>
            </OnlyPc>
        </ul>
    )
}
