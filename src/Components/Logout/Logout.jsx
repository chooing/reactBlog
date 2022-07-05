import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import profileImg from '../../assets/profile.jpg';
import writeIcon from '../../assets/icon-modify-white.svg';
import LogoutIcon from '../../assets/icon-logout.svg';

const ProfileImg =styled.li`
    & a {
        width: 4.4rem;
        height: 4.4rem;
        display: block;
        border-radius: 50%;
    }
    
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default function Logout({isLogin, setIsLogin}) {
    
    const handleOnClickLogout=()=>{
        setIsLogin(!isLogin);
    }

    return (
        <ul>
            <ProfileImg>
                <Link to='/'>
                    <img src={profileImg} alt="My Page" />
                </Link>
            </ProfileImg>
            <li>
                <Button colorType={'basic'} isInHeader isLink to={'/'}>
                    <img src={writeIcon} alt=""/>
                    <span>Write</span>
                </Button>
            </li>
            <li>
                <Button colorType={'white'} isInHeader onClick={handleOnClickLogout}>
                    <img src={LogoutIcon} alt=""/>
                    <span>Logout</span>
                </Button>
            </li>
        </ul>
    )
}
