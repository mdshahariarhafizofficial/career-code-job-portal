import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GiMoneyStack } from 'react-icons/gi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {title, _id, salaryRange, requirements, location, jobType, description, company_logo, company, applicationDeadline} = job; 
    
    return (
        <div className="card bg-[#f8faff] shadow-sm border border-[#e0e6f7]">
        <div className='flex gap-6 justify-start p-5'>
            <img
            className='w-16 rounded-xl object-cover'
            src={company_logo}
            alt="logo" />
            <div className='space-y-1'>
                <h2 className='text-xl font-bold text-secondary'>{company}</h2>
                <p className='flex items-center gap-1 text-accent text-sm'>  
                  <CiLocationOn size={20}></CiLocationOn>  {location}</p>
            </div>
        </div>
        <div className="card-body pt-0">
            <h2 className="card-title text-xl font-bold text-secondary">
            {title}
            </h2>
            <div className='flex gap-6 mb-2'>
                <div className='text-sm font-medium text-accent flex items-center gap-1'><IoBriefcaseOutline></IoBriefcaseOutline> {jobType}</div>
                <div className='text-sm font-medium text-accent flex items-center gap-1'><MdOutlineCalendarMonth></MdOutlineCalendarMonth> {applicationDeadline}</div>
            </div>
            <p className='text-accent font-medium'>{description}</p>
            <div className="card-actions">
                <div className='mt-2'>
                    <div>
                        <h2 className='flex gap-1 items-center text-primary font-bold text-base uppercase'>{
                            <>
                            <GiMoneyStack size={25} color='gray'></GiMoneyStack>
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}   
                            </>
                        }</h2>
                    </div>
                </div>

                <div>
                    {
                        requirements.map((req, i) => 
                            <div key={i} className="badge badge-outline mr-2 mb-2">{req}</div>
                        )
                    }
                </div>

            </div>
                    <div className='mt-3 flex justify-end'>
                        <Link to={`/jobs/${_id}`}>
                            <button onClick={()=> window.scrollTo(0,1)} className='btn btn-outline border-2 border-primary'>Show Details</button>
                        </Link>
                    </div>
        </div>
        </div>
    );
};

export default JobCard;