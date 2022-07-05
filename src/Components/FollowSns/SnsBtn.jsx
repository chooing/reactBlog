import { Link } from 'react-router-dom'

import FacebookIcon from '../../assets/Facebook.svg'
import TwitterIcon from '../../assets/Twitter.svg'
import GitHubIcon from '../../assets/Github.svg'
import InstagramIcon from '../../assets/Instagram.svg'
import styled from 'styled-components'

const BtnStyle = styled(Link)`
    display: block;
	padding: 0.4rem;
	line-height: 1;
    
    & img {
        width: 1.6rem;
        display: block;
    }
`;

export default function snsBtn({snsLink , snsType}) {
    const iconObj={
        'Facebook':FacebookIcon,
        'Twitter':TwitterIcon,
        'Github':GitHubIcon,
        'Instagram':InstagramIcon,
    }

    return (
        <li>
            <BtnStyle to={snsLink}>
                <img src={iconObj[snsType]} alt={snsType} />
            </BtnStyle>
        </li>
    )
}
