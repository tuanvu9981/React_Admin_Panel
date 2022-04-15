import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            {/* <h1 className='title'>Admin React</h1> */}
            <Sidebar/>
            <div className="homeContainer">container</div>
        </div>
    )
}

export default Home;