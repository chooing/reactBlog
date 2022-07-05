import DeleteIcon from '../../assets/icon-delete.svg'
import DeleteHoverIcon from '../../assets/icon-delete-white.svg'

import styled from "styled-components"

const DeleteBtnStyle = styled.button`
	width: 4rem;
	height: 4rem;
	border: 0;
	transition: all 0.3s;
    border-radius: ${({theme})=>theme.borderRadius};
    background-color: ${({theme})=>theme.grayBackground};
    background-image: url(${DeleteIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
	background-size: 1.6rem;

    &:focus {
        outline-color: ${({theme})=>`rgba(${theme.redRgb}, 0.2)`};
        box-shadow: 0 0 0 1px ${({theme})=>theme.redColor};
    }

    &:hover {
        background-color: ${({theme})=>theme.redColor};
        background-image: url(${DeleteHoverIcon});
    }
`;

const BtnText = styled.span`
    ${({theme})=>theme.a11yHidden()}
`;

export default function DeleteBtn() {
    return (
        <DeleteBtnStyle type="button">
            <BtnText>delete</BtnText>
        </DeleteBtnStyle>
    )
}
