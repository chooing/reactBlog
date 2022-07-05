import React from 'react'
import { useContext, useEffect, useState } from "react";
import { PostData } from '../../data/data'
import PostCard from '../PostCard/PostCard'
import styled from "styled-components";


const Title = styled.h2`
    ${({theme})=>theme.a11yHidden()}
`;

const PostsWrap = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;

    @media ${({theme})=>theme.mobileL}{
		grid-template-columns: repeat(2, 1fr);
    }
    @media ${({theme})=>theme.mobileS}{
		grid-template-columns: repeat(1, 1fr);
    }
`;

export default function Posts() {
    const [loadData, setLoadData] = useState(null)
    const [reverseDate, setReverseDate] = useState(null)
    const [postsAllNum, setPostsAllNum] = useState(0);

    useEffect(()=>{
        console.log('로딩중!')
    },[])
    
    useEffect(()=>{
        if (loadData === null) {
        return
        } else {
        setPostsAllNum(loadData.length);
        setReverseDate(loadData.reverse());
        }
    }, [loadData])

    useContext(PostData).then(d => {
        setLoadData(d)
    })
    
    return (
        <>
            <Title>Post</Title>
            {reverseDate !== null ? 
                <PostsWrap>
                    {reverseDate.map((post,index)=>
                        <PostCard
                        key={index}
                        index={postsAllNum - index}
                        title={post.title}
                        author={post.author}
                        postImg={post.postImg}
                        profileImg={post.profileImg}
                        categories={post.categories}
                        createdDate={post.createdDate}
                        description={post.description}
                        />
                    )}
                </PostsWrap>
                :<h2>로딩중</h2>
            }
        </>
    )
}
