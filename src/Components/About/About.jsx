import { useContext, useEffect, useState } from 'react'
import { UserInfo } from '../../data/userDate'
import FollowSns from '../FollowSns/FollowSns'
import Categories from './Categories/Categories'

import SubTitle from "./SubTitle"
import styled from 'styled-components'

const AboutWrap = styled.aside`
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: ${({theme})=>theme.borderRadius};
	background: ${({theme})=>theme.whiteColor};
	text-align: center;
	font-size: 2rem;

    @media ${({theme})=>theme.desktopS}{ width: 100%; }
`;

const Profile = styled.img`
	width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`;

const Name = styled.p`
	color: ${({theme})=>theme.mainColor};
	font-weight: bold;
	font-size: 1.6rem;
	margin: 1.2rem 0 0.8rem;
`;

const Description = styled.p`
	font-size: 1.4rem;
	padding: 0 0.4rem;
`;

export default function About() {
    // const { name, profileUrl, description, categories, snsList} = useContext(UserInfo);
	const [loadData, setLoadData] = useState(null)

    useEffect(()=>{
        console.log('로딩중!')
    },[])
    
    useEffect(()=>{
        if (loadData === null) {
        return
        } else {
            console.log('로딩완');
        }
    }, [loadData])

    useContext(UserInfo).then(d => {
        setLoadData(d[0])
		console.log(loadData);
    })
	
	
    return (
		<AboutWrap>
			<SubTitle isH2>About Me</SubTitle>
			{
				(loadData !== null)?
				<h2>
					<Profile src={`${process.env.PUBLIC_URL}/assets/${loadData.profileUrl}`} alt=""/>
					<Name>{loadData.name}</Name>
					<Description>{loadData.description}</Description>
					<Categories categories={loadData.categories}/>
					<FollowSns snsList={loadData.snsList}/>
				</h2>
			:<h2>유저정보없음</h2>	
			}
        </AboutWrap>
    )
}
