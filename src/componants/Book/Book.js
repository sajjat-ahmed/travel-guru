import React from 'react';
import './Book.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Book = () => {
    const mapStyles = {
        height: "70vh",
        width: "40%",
        borderRadius: "10px"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
    return (
        <div className="container book">
            <div className="div1">
                <div>
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2026.png" alt=""/><br/>
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2027.png" alt=""/><br/>
                    <img src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2028.png" alt=""/>
                </div>
            </div>
            <div>
                <LoadScript
                    googleMapsApiKey='AIzaSyCVQSHEfIS2kycuJ4El-iTvMH2uNETT8G0'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                    />
                </LoadScript>
            </div>

        </div>
    );
};

export default Book;