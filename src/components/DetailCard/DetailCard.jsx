import React from 'react';

const DetailCard = (props) => {
    const { heading, source, leadIn, interestedVehicle, status} = props

    return (
        <div>
            <h1>{heading}</h1>
            <p>Source: {source}</p>
            <p>Lead In: {leadIn}</p>
            <p>Interested Vehicle: {interestedVehicle}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default DetailCard;