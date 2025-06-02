import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewJobApplications = () => {
    const data = useLoaderData();
    console.log(data);
    
    const {job_id} = useParams();
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-primary'>Applications for : {job_id} ({data.length})</h1>
        </div>
    );
};

export default ViewJobApplications;