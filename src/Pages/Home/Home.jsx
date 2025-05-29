import React, { Suspense } from 'react';
import Hero from '../../Components/Header/Hero';
import Jobs from '../../Components/Jobs/Jobs';

const fetchJobs = fetch('http://localhost:8000/jobs')
.then(res => res.json())

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback = {<h2>Loading....</h2>} >
                <Jobs fetchJobs = {fetchJobs}></Jobs>
            </Suspense>
        </div>
    );
};

export default Home;