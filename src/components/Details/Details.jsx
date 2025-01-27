import React from 'react';
import DetailCard from "../DetailCard/DetailCard.jsx";
import './Details.css'

const Details = () => {

    const detailData = [{
        heading: "Original",
        source: "CarGurus",
        leadIn: "30th January 2024",
        interestedVehicle: "2023 Honda Civic",
        status: "Lost"
    }, {
        heading: "Revival",
        source: "Walk In",
        leadIn: "23rd October 2024",
        interestedVehicle: "2024 Honda Civic",
        status: "Sold"
    }]

    return (
        <div className="detail-section-wrapper">
            {detailData.map((item, index) => (<DetailCard heading={item.heading}
            source={item.source} leadIn={item.leadIn} interestedVehicle={item.interestedVehicle}
            status={item.status}></DetailCard>))}
        </div>
    );
};

export default Details;