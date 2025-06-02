import React, { Suspense, useContext } from 'react';
import Loading from '../Loading/Loading';
import AuthContext from '../../Context/AuthContext';
import MyPostedJobsTable from './MyPostedJobsTable';
import { fetchMyPostedJobs } from '../../API/MyJobsApi';

const MyPostedJobs = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-10 text-primary'>My Posted Jobs</h2>
            <div className='divider'></div>
            <Suspense fallback={<Loading></Loading>}>
                <MyPostedJobsTable fetchMyPostedJobs={fetchMyPostedJobs(user?.email)}></MyPostedJobsTable>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;