import React, { useState } from 'react';
import travel from '../../fakedata/fakedata';
import Travel from '../Travel/Travel';
import './Home.css';

const Home = () => {
    const [travels, useTravels] = useState(travel);
    return (
        <div className="home">
            {
                travels.map(travel => <Travel travel={travel}></Travel>)
            }
        </div>
    );
};

export default Home;