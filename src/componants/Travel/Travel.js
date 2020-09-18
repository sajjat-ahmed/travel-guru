import React from 'react';
import './Travel.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const Travel = (props) => {
    const { name, img, id } = props.travel;
    return (
        <div className="container">
            <Link to={`/travel/${id}`}>
                <div>
                    <img className="travel__image" src={img} alt="" />
                </div>
                <div >
                    <h4 >{name}</h4>
                    <p>Booking now<ArrowForwardIcon></ArrowForwardIcon></p>
                </div>
            </Link>
        </div>
    );
};

export default Travel;