import React, { use } from 'react';
import AuthContext from '../../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const {user} = use(AuthContext);
    
    // Handle Add Jobs
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Process Form Data
        const {min, max, currency, requirements, responsibilities, ...newJob} = data;

        console.log(newJob);
        newJob.salaryRange = {min, max, currency};
        newJob.requirements = requirements.split(',').map(req => req.trim());

        newJob.responsibilities = responsibilities.split(',').map(res => res.trim());
        newJob.status = "active";

        // Send data to DB
        axios.post('http://localhost:8000/jobs', newJob)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                icon: "success",
                title: "Your Job has been Added!",
                showConfirmButton: false,
                timer: 1500
                });
            }           
        }).catch(error => {
            console.log(error);
        })
        form.reset();
    }

    return (
        <div className='max-w-[880px] mx-auto border-2 border-gray-100 p-5 md:p-10 rounded-xl mb-20 mt-10'>
            <div>
                <h2 className='text-primary text-center font-bold text-4xl my-5'>Add New Job</h2>
                <div className='divider'></div>
            </div>

            <div>
                <form onSubmit={handleAddJob} className='space-y-6'>

                    {/* Step-1 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Company Name</label>
                        <input type="text"
                        className="input w-full mb-3"
                        name='company'
                        placeholder="Company Name" />

                        <label className="label">Job Title</label>
                        <input 
                        type="text" 
                        className="input w-full mb-3"
                        name='title' 
                        placeholder="Job Title" />

                        <label className="label">Location</label>
                        <input 
                        type="text" 
                        className="input w-full mb-3"
                        name='location' 
                        placeholder="Location" />
                    </fieldset>
        

                    {/* Step-2 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

                        <label className="label">Job Type</label>
                        <div className="filter mb-4">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
                        <input className="btn" type="radio" value="On-site" name="jobType" aria-label="On-site"/>
                        <input className="btn" type="radio" value="Remote" name="jobType" aria-label="Remote"/>
                        <input className="btn" type="radio" value="Hybrid" name="jobType" aria-label="Hybrid"/>
                        </div>
                        
                        <label className="label">Job Category</label>                       
                        <select defaultValue="Select a category" name='category' className="select w-full">
                        <option disabled={true}>Select a category</option>
                        <option>Engineering</option>
                        <option>Video Editing</option>
                        <option>Content Writing</option>
                        <option>Software Development</option>
                        <option>Web Development</option>
                        <option>SEO / SEM</option>
                        </select>


                    </fieldset>

                    {/* Step-3 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text"
                            className="input w-full mb-3"
                            name='min'
                            placeholder="Min Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input 
                            type="text" 
                            className="input w-full mb-3"
                            name='max' 
                            placeholder="Max Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select Currency" name='currency' className="select w-full">
                            <option disabled={true}>Select Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EU</option>
                            </select>
                        </div>
                    </div>


                    </fieldset>

                    {/* Step-4 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Requirements</label>
                        <textarea type="text"
                        className="textarea w-full mb-3"
                        name='requirements'
                        placeholder="Requirements (Separate by comma)" />

                        <label className="label">Responsibilities</label>
                        <textarea 
                        type="text" 
                        className="textarea w-full mb-3"
                        name='responsibilities' 
                        placeholder="Responsibilities (Separate by comma)" />

                    </fieldset>

                    {/* Step-5 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label">Application Deadline</label>
                        <input type="date"
                        className="input w-full mb-3"
                        name='applicationDeadline'
                        placeholder="Application Deadline" />

                        <label className="label">Company Logo</label>
                        <input 
                        type="url" 
                        className="input w-full mb-3"
                        name='company_logo' 
                        placeholder="company logo URL" />

                        <label className="label">Description</label>
                        <textarea 
                        type="text" 
                        className="textarea w-full mb-3"
                        name='description' 
                        placeholder="Description" />
                    </fieldset>
        

                    {/* Step-6 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend>Hr Info</legend>
                        <label className="label">Hr Name</label>
                        <input type="text"
                        defaultValue={user?.displayName}
                        className="input w-full mb-3"
                        name='hr_name'
                        placeholder="Hr name" />

                        <label className="label">Hr Email</label>
                        <input 
                        type="email" 
                        defaultValue={user?.email}
                        className="input w-full mb-3"
                        name='hr_email' 
                        placeholder="Hr Email" />

                    </fieldset>

                    <input type="submit" className='btn w-full btn-secondary' value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default AddJob;