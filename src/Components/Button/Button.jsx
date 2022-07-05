import styled, { css } from 'styled-components'
import { Link as ReactRouterDomLink } from 'react-router-dom'

const COLOR = {
    basic: css`
        background: ${({theme}) => theme.mainColor};
        color: ${({theme}) => theme.whiteColor};
    `,
    gray: css`
        background: ${({theme}) => theme.grayBackground};
        color: ${({theme}) => theme.blackColor};
    `,
    white: css`
        background: ${({theme}) => theme.whiteColor};
        color: ${({theme}) => theme.blackColor};
    `,
}

const headerMedia = css`
    @media ${({theme}) => theme.mobileM} {
        width: 4.4rem;
        height: 4.4rem;
        padding: 0;
        border-radius: 50%;
        
        & span {
            overflow: hidden;
            position: absolute;
            clip: rect(0, 0, 0, 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            border: 0;
            padding: 0;
        }
    }
`;

const basicStyle = css`
    ${({colorStyle}) => colorStyle};

    width: ${({fullWidth})=>fullWidth?'100%':null};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
    padding: ${({colorType}) => colorType === 'white'? '0.2rem 0.8em 0':'0.2rem 1.2em 0'};
	
	border: 0;
	border-radius: ${({theme}) => theme.borderRadius};
	text-transform: ${({isInHeader})=>isInHeader?'none':'uppercase'};
	font-weight: bold;
	line-height: 1;

    & img {
	height: 1.2em;
	margin-top: -0.2rem;
	vertical-align: middle;
    }

    ${({isInHeader})=>isInHeader?headerMedia:null}

`;

const Link = ({ colorStyle, colorType, children,fullWidth,isInHeader, ...props }) => {
	return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const Btn = styled.button`${basicStyle}`;
const ALink = styled(Link)`${basicStyle}`;

export default function Button({ children, colorType, fullWidth=false, isInHeader=false, isLink=false, to, onClick }) {
    const colorStyle = COLOR[colorType];

    if(isLink){

        return (
            <ALink
                to={to}
                fullWidth={fullWidth}
                colorType={colorType}
                colorStyle={colorStyle}
                isInHeader={isInHeader}
                onClick={onClick}
            >
                {children}
            </ALink>
        )
    }else{        
        return (
            <Btn
                fullWidth={fullWidth}
                colorType={colorType}
                colorStyle={colorStyle}
                isInHeader={isInHeader}
                onClick={onClick}
            >
                {children}
            </Btn>
        )
    }
}
