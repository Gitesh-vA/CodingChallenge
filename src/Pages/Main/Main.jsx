import React from 'react';
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import Header from '../../components/Header/Header.jsx'
import Details from '../../components/Details/Details.jsx'
import History from '../../components/History/History.jsx'

const Main = () => {
    return (
        <MainWrapper>
            <Header />
            <Details />
            <History />
        </MainWrapper>
    );
};

export default Main;