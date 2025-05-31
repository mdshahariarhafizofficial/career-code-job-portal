import React, { Suspense, useContext } from 'react';
import JobsTable from '../../Components/MyJobsTable/JobsTable';
import Loading from '../Loading/Loading';
import AuthContext from '../../Context/AuthContext';
import { fetchMyJobs } from '../../API/ApplicationsApi';


const MyApplications = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-primary text-center font-bold text-4xl my-5'>My Applications</h2>
            <div className='divider'></div>
            <Suspense fallback={<Loading></Loading>}>
                <JobsTable 
                fetchMyJobs={fetchMyJobs(user?.email)}>
                </JobsTable>
            </Suspense>
        </div>
    );
};

export default MyApplications;