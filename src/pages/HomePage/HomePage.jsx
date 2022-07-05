import { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import Main from '../../Components/Main/Main';

function HomePage() {
    return (
        <>
            <Banner isMain/>
            <Main/>
        </>
    )
}

export default HomePage