import styled from "styled-components"
import DeleteBtn from "../Button/DeleteBtn"
import ModifyBtn from "../Button/ModifyBtn"

const GroupStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
	position: absolute;
	top: 9.2rem;
	right: 8rem;
	font-size: 1.6rem;

    @media ${({theme})=>theme.desktopS} {
        top: 6rem;
		right: 6rem;
		height: 5.2rem;
    }
    @media ${({theme})=>theme.mobileM} {
		top: 4rem;
		right: 4rem;
    }
`

export default function BtnGroup(){
    return(
        <GroupStyle>
			<ModifyBtn/>
			<DeleteBtn/>
        </GroupStyle>
    )
}