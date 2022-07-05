import Banner from '../../Components/Banner/Banner'
import View from '../../Components/View/View'
import { useContext, useState, useEffect } from "react";
import { PostData } from '../../data/data'
import {useParams} from 'react-router-dom'

function PostView() {
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

    useContext(PostData).then(d => {
        setLoadData(d)
    })

    const {id} = useParams();
    return (
        <>
            <Banner postIndex={id}/>
            {(loadData !== null)?<View postInfo={loadData[id-1]} />:<h2>로딩중</h2>}
            
        </>
    )
}

export default PostView