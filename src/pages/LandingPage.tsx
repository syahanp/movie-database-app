import React from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';

const LandingPage:React.FC = () => {

    return (
        <>
            <Header />

            <MovieList />
        </>
    )
}

export default LandingPage;