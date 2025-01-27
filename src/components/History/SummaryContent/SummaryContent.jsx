import React from 'react';

const SummaryContent = (props) => {
    const { subject, date, crm } = props

    return (
        <div>
             <h1>Subject: {subject}</h1>
            <p>Sent on <b>{date}</b></p>
            <p>CRM : {crm}</p>
        </div>
    );
};

export default SummaryContent;