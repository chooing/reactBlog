import styled from 'styled-components'

import SnsBtn from './SnsBtn'
import SubTitle from "../About/SubTitle"

const SnsWrap = styled.ul`
	display: flex;
	gap: 0.6rem;
	justify-content: center;
	margin-top: -0.4rem;
`;

export default function FollowSns({snsList}) {
    return (
        <>
        <SubTitle>Follow</SubTitle>
            <SnsWrap>
                {snsList.map(sns => 
                <SnsBtn key={sns.id} snsLink ={sns.link} snsType={sns.id} />)}
            </SnsWrap>
        </>
    )
}
