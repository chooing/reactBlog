import { createContext } from "react";


async function fetchPostAPI(){
    const res = await fetch('https://raw.githubusercontent.com/chooing/reactBlog/main/postsdata.json');
    const result = await res.json();
    return result
}
export const PostData = createContext(fetchPostAPI());

async function fetchUserAPI(){
    const res = await fetch('https://raw.githubusercontent.com/chooing/reactBlog/main/userInfo.json')
    const result = await res.json()

    return result
}
export const UserInfo = createContext(fetchUserAPI())