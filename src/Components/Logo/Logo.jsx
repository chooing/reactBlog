import {Link} from 'react-router-dom'
import LOGO_URL from '../../assets/Logo.svg'
import styled from 'styled-components'

const HeaderLogo = styled.h1`
	font-size: 3rem;
  & a {
    display: block;
    padding: 0.4rem;
    margin-left: -0.4rem;
  }
  & a img {
    display: block;
  }
`;

export default function Logo() {
  return (
    <HeaderLogo>
        <Link to='/'>
            <img src={LOGO_URL} alt="My Blog" />
        </Link>
    </HeaderLogo>
  )
}
