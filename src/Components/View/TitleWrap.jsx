import styled from "styled-components"

const TitleWrap = styled.div`
    display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 8rem;
	margin-bottom: 1rem;
	font-size: 1.6rem;

    &>h2 {
        width: 100%;
        text-transform: none;
        font-size: 3.2rem;
        font-weight: bold;
    }

    & button { flex-shrink: 0; }

    @media ${({theme})=>theme.desktopS} {
		flex-direction: column;
		gap: 2rem;
    }
`;

export default TitleWrap ;
