import React, { use } from 'react';

const MyPostedJobsTable = ({fetchMyPostedJobs}) => {
    const myJobs = use(fetchMyPostedJobs);
    console.log(myJobs);
    
    return (
        <div className='pb-20'>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Company Name</th>
                    <th>Job</th>
                    <th>hr_email</th>
                    <th>Deadline</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    myJobs.map((job, index) =>
                        <tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.company}</td>
                            <td>{job.title}</td>
                            <td>{job.hr_email}</td>
                            <td>{job.applicationDeadline}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyPostedJobsTable;