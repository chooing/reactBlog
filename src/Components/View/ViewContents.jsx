import styled from 'styled-components';

const ContentsStyle = styled.div`
    & img {
        max-width: 100%;
        margin: 3.2rem 0;
    }
    & p {
        font-size: 1.6rem;
        line-height: 1.6;
        text-align: justify;
        letter-spacing: -0.01em;
    }
`;


export default function ViewContents({ contents }) {

    let IMG_URL = `${process.env.PUBLIC_URL}/assets/${contents.img}`;

    return (
        <ContentsStyle>
            <p>{contents.text}</p>
            <img src={IMG_URL} alt="" />
            <p>{contents.text}</p>
        </ContentsStyle>
    )
}
