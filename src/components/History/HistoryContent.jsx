import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SummaryDetail1 from "./SummaryDetails/SummaryDetail1.jsx";
import SummaryDetail2 from "./SummaryDetails/SummaryDetail2.jsx";
import SummaryDetail3 from "./SummaryDetails/SummaryDetail3.jsx";
import SummaryContent from "./SummaryContent/SummaryContent.jsx";

const HistoryContent = () => {
    const mailData = [{
        summaryContent: {
            subject: "2025 Honda Pilot EX-L $459/Mo Lease*",
            date: "07 Oct 2024 07:33 AM",
            crm: "This message was not added to the lead activity"
        },
        summaryDetail: <SummaryDetail1></SummaryDetail1>
    },
        {
            summaryContent: {
                subject: "Like-New saving: 2022 Honda CR-V",
                date: "27 Oct 2024 05:53 PM",
                crm: "This message was not added to the lead activity"
            },
            summaryDetail: <SummaryDetail2></SummaryDetail2>
        },
        {
            summaryContent: {
                subject: "2025 Honda Pilot EX-L $459/Mo Lease*",
                date: "04 Oct 2024 07:50 AM",
                crm: "This message was not added to the lead activity"
            },
            summaryDetail: <SummaryDetail3></SummaryDetail3>
        }
    ]

    return (
        <div>

                {mailData.length > 0 && mailData.map((item, index) => (
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <SummaryContent
                                subject={item.summaryContent.subject}
                                date={item.summaryContent.date}
                                crm={item.summaryContent.crm}
                            ></SummaryContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.summaryDetail}
                        </AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
};

export default HistoryContent;