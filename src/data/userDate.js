import { createContext } from "react";

async function fetchUserAPI(){
    const res = await fetch('https://raw.githubusercontent.com/chooing/reactBlog/main/userInfo.json')
    const result = await res.json()
    console.log(result);

    return result
}
export const UserInfo = createContext(fetchUserAPI())