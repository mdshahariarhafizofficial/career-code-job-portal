import React, { use } from 'react';

const JobsTable = ({fetchMyJobs}) => {
    const myJobs = use(fetchMyJobs);
    console.log(myJobs);
    
    return (
        <div>
            <h1>Jobs Table</h1>
        </div>
    );
};

export default JobsTable;