import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewJobApplications = () => {
    const data = useLoaderData();
    console.log(data);
    const {job_id} = useParams();

    // Handle Job Status
    const handleJobStatus = (e, id) => {
        console.log(e.target.value, id);
        axios.patch(`http://localhost:8000/applications/${id}`, {
            status: e.target.value,
        })
        .then(res => {
            console.log(res.data);
            
        }).catch(error => {
            console.log(error);
            
        })
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-primary'>Applications for : {job_id} ({data.length})</h1>
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        data.map((job, index) => 
                        <tr key={index} className="bg-base-200">
                            <th>{index+1}</th>
                            <td>{job.email}</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <select
                                onChange={(e)=>handleJobStatus(e, job._id)}
                                defaultValue={job.status} className="select">
                                <option disabled={true}>Update Status</option>
                                <option>Pending</option>
                                <option>Rejected</option>
                                <option>Hired</option>
                                </select>
                            </td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default ViewJobApplications;