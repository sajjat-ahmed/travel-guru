import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import travel from '../../fakedata/fakedata';
import './TravelDetail.css';

const TravelDetail = () => {
    const { id } = useParams();
    const [traveldetail, useTraveldetail] = useState(travel);

    let travelers;
    if(traveldetail[0].id === id){
        travelers = 
        <div className="trsver-zoon">
            <h1>{traveldetail[0].name}</h1>
            <br/><br/>
            <p>{traveldetail[0].title}</p>
        </div>
    }
    if(traveldetail[1].id === id){
        travelers = 
        <div>
            <h1>{traveldetail[1].name}</h1>
            <br/><br/>
            <p>{traveldetail[1].title}</p>
        </div>
    }
    if(traveldetail[2].id === id){
        travelers = 
        <div>
            <h1>{traveldetail[2].name}</h1>
            <br/><br/>
            <p>{traveldetail[2].title}</p>
        </div>
    }


    return (
        <div className="container flex-item">
            <div className="div1">
                {travelers}
            </div>
            <div className="div2">
                <input className="input-input" placeholder="Origin" type="text"/>
                <br/>
                <input className="input-input" placeholder="Destination" type="text"/>
                <br/>
                <input className="input-input" type="text"/>
                <br/>
                <Link to="/book">
                    <button className="header_button">Start Booking</button>
                </Link>
            </div>
        </div>
    );
};

export default TravelDetail;