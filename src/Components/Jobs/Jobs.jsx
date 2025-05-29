import React, { use } from 'react';
import JobCard from './JobCard';

const Jobs = ({fetchJobs}) => {
    const jobs = use(fetchJobs);
    console.log(jobs);
    
    return (
        <div className='my-20'>
            <div className='text-center space-y-3 mb-10'>
                <h2 className='text-5xl font-bold'>Jobs of the day</h2>
                <p className='text-lg text-accent font-medium'>Search and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    jobs.map(job => 
                        <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>
                    )
                }
            </div>
        </div>
    );
};

export default Jobs;