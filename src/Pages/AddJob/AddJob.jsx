import React from 'react';

const AddJob = () => {
    return (
        <div className='max-w-[880px] mx-auto border-2 border-gray-100 p-5 md:p-10 rounded-xl mb-20 mt-10'>
            <div>
                <h2 className='text-primary text-center font-bold text-4xl my-5'>Add New Job</h2>
                <div className='divider'></div>
            </div>

            <div>
                <form className='space-y-6'>

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
                        <input className="btn" type="radio" name="jobType" aria-label="On-site"/>
                        <input className="btn" type="radio" name="jobType" aria-label="Remote"/>
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid"/>
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

                    {/* Step-5 */}
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


                </form>
            </div>

        </div>
    );
};

export default AddJob;