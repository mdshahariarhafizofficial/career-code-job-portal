import React, { Suspense } from 'react';
import Hero from '../../Components/Header/Hero';
import Jobs from '../../Components/Jobs/Jobs';
import Loading from '../Loading/Loading';

const fetchJobs = fetch('http://localhost:8000/jobs')
.then(res => res.json())

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback = {<Loading></Loading>} >
                <Jobs fetchJobs = {fetchJobs}></Jobs>
            </Suspense>
        </div>
    );
};

export default Home;