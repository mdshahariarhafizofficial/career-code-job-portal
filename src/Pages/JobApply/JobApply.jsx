import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoBriefcaseOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { MdOutlineCalendarMonth,  MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import AuthContext from '../../Context/AuthContext';

const JobApply = () => {
    const {user} = useContext(AuthContext);
    const job = useLoaderData(); 

    const {title, _id, jobType, company, applicationDeadline, company_logo } = job;
    return (
        <div className='max-w-[880px] mx-auto border-2 border-gray-100 p-5 md:p-10 rounded-xl mb-20 mt-10'>
            <h2 className='text-secondary text-center font-bold text-5xl'>Apply For This Job</h2>
            <div className='divider'></div>

            <div className='flex justify-between my-6'>
                <div className='space-y-2 flex items-center gap-1'>
                    <img src={company_logo} alt="" />
                    <h2 className='text-3xl font-bold text-secondary'>{company}</h2>                   
                </div>
                
                <div className='space-y-2'>
                    <h2 className='text-xl font-bold text-secondary'>{title}</h2>
                    <div className='flex gap-6 mb-2'>
                        <div className='text-sm font-medium text-accent flex items-center gap-1'><IoBriefcaseOutline></IoBriefcaseOutline> {jobType}</div>
                        <div className='text-sm font-medium text-accent flex items-center gap-1'><MdOutlineCalendarMonth></MdOutlineCalendarMonth> {applicationDeadline}</div>
                    </div>                    
                </div>
            </div>

            <div className='flex justify-between'>
                <Link to={`/jobs/${_id}`}>
                    <button className='btn btn-secondary'>Job Details<MdOutlineKeyboardDoubleArrowRight size={25}></MdOutlineKeyboardDoubleArrowRight> </button>
                </Link>
                <Link to='/'>
                    <button className='btn btn-primary'>Go to Home <MdOutlineKeyboardDoubleArrowRight size={25}></MdOutlineKeyboardDoubleArrowRight> </button>
                </Link>
            </div>

            <div className="divider"></div>

            
            {/* Form */}
            <div className='border-2 border-gray-100 p-5 my-10 rounded-2xl'>
                <h2 className='text-primary text-center font-bold text-3xl'>Job Application</h2>
                <div className='divider'></div>

            <form className="card-body pt-0">
                <fieldset className="fieldset space-y-3">
                
                
                {/* Email */}
                <label className="label">Email*</label>
                <input type="email" defaultValue={user.email} name='email' className="input w-full py-6" required placeholder="Email" />
                
                {/* Linkedin */}
                <label className="label">Linkedin URL*</label>
                <input type="url" name='linkedin' className="input w-full py-6" required placeholder="Linkedin URL" />
                
                {/* Github */}
                <label className="label">Github URL*</label>
                <input type="url" name='github' className="input w-full py-6" required placeholder="Github URL" />

                {/* Resume */}
                <label className="label">Resume Url*</label>
                <input type="url" name='resume' className="input w-full py-6" required placeholder="Resume URL" />


                <button type='submit' className="btn btn-secondary mt-4 py-6">Submit & Apply</button>
                </fieldset>
            </form>

            </div>


            <div className="divider"></div>

        </div>
    );
};

export default JobApply;