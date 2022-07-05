
const size = {
    mobileS: '540px',
    mobileM: '640px',
    mobileL: '768px',
    desktopS: '1024px',
    desktopM: '1260px',
    desktopL: '1280px',
}

const a11yHidden = () => {
    return `	
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    `;
};

const linkUnderline = () => {
    return `	
        display: block;
        width: 5em;
        text-align: center;
        text-decoration: underline;
        color: ${({theme}) => theme.grayColor};
        padding: 0.4rem 1rem;
        margin: 1rem 0 auto auto;
        transition: all 0.3s;

        &:hover {
            color: ${({theme}) => theme.mainColor};
        }
    `;
};

const notFound = () => {
    return `	
        text-align: center;
        margin-top: 8rem;

        &>h2 {
            color: ${({theme}) => theme.mainColor};;
            font-size: 5rem;
            font-weight: bold;
        }

        &>p {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    `;
};

const theme = {
    mainColor: 'rgb(55, 170, 236)',
    mainColorOp20: 'rgba(55, 170, 236, 0.2)',
    mainRgb: '55, 171, 236',
    outlineBorder: 'rgb(55, 160, 236)',
    redColor: 'rgb(243, 124, 75)',
    redRgb: '243, 124, 75',
    blackColor: '#28303f',
    whiteColor: '#fff',
    grayColor:' #767676',
    borderColor: '#ddd',
    grayBackgroundLight: '#f9f9f9',
    grayBackground: '#f5f5f5',
    grayText: '#6f6f6f',
    borderRadius: '0.4em',

    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    desktopS: `(max-width: ${size.desktopS})`,
    desktopM: `(max-width: ${size.desktopM})`,
    desktopL: `(max-width: ${size.desktopL})`,

    a11yHidden, // ${({ theme }) => theme.a11yHidden()}
    linkUnderline,
    notFound,
}

export default theme