import React, { Suspense, useContext } from 'react';
import JobsTable from '../../Components/MyJobsTable/JobsTable';
import Loading from '../Loading/Loading';
import AuthContext from '../../Context/AuthContext';
import { fetchMyJobs } from '../../API/ApplicationsApi';


const MyApplications = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>My Applications Page</h1>
            <Suspense fallback={<Loading></Loading>}>
                <JobsTable 
                fetchMyJobs={fetchMyJobs(user?.email)}>
                </JobsTable>
            </Suspense>
        </div>
    );
};

export default MyApplications;