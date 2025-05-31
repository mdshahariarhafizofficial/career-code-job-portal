import React from 'react';
import { Link, useLoaderData } from 'react-router';
import metImg from '../../assets/met.png'
import { IoBriefcaseOutline, IoMailUnreadOutline } from 'react-icons/io5';
import { MdOutlineCalendarMonth, MdOutlineVerified } from 'react-icons/md';
import { PiBuildingApartment, PiHandHeart, PiWatch } from 'react-icons/pi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { LuCircleUser, LuMapPinned, LuNotebookText } from 'react-icons/lu';
import { TbCategory } from 'react-icons/tb';
const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    
    const {title, _id, salaryRange, requirements, location, jobType, description, company, applicationDeadline, category, hr_name, hr_email, responsibilities, company_logo } = job;
    
    return (
        <div className='max-w-[880px] mx-auto border-2 border-gray-100 p-5 rounded-xl mb-20 mt-10'>

            <div className='flex justify-between my-6'>
                <div className='space-y-2'>
                    <h2 className='text-4xl font-bold text-secondary'>{title}</h2>
                    <div className='flex gap-6 mb-2'>
                        <div className='text-sm font-medium text-accent flex items-center gap-1'><IoBriefcaseOutline></IoBriefcaseOutline> {jobType}</div>
                        <div className='text-sm font-medium text-accent flex items-center gap-1'><MdOutlineCalendarMonth></MdOutlineCalendarMonth> {applicationDeadline}</div>
                    </div>                    
                </div>

                <div>
                    <Link to={`/job-apply/${_id}`}>
                    <button className='btn btn-primary px-10 text-lg font-light py-6 flex items-center'>
                        <MdOutlineVerified size={25}></MdOutlineVerified>
                        Apply Now</button>
                    </Link>
                </div>
            </div>

            <div className="divider"></div>

            <img className='w-full rounded-xl my-4' src={metImg} alt="" />

            <div className='border border-gray-200 p-5 rounded-lg'>
                <h2 className='text-2xl font-bold'>Overview</h2>
                <div className="divider"></div>
                <div className='flex gap-6'>

                    <div className='flex-1 space-y-5'>

                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <PiBuildingApartment size={22}></PiBuildingApartment>
                                Company : </p>
                            <p className='text-secondary font-semibold'>
                                {company}
                            </p>
                        </div>

                        
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <IoBriefcaseOutline size={22}></IoBriefcaseOutline>
                                Job Type : </p>
                            <p className='text-secondary font-semibold'>
                                {jobType}
                            </p>
                        </div>

                        
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <RiMoneyDollarCircleLine size={22}></RiMoneyDollarCircleLine>
                                Salary : </p>
                            <p className='text-secondary font-semibold uppercase'>
                                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                            </p>
                        </div>
                            
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <LuCircleUser size={22}></LuCircleUser>
                                Author : </p>
                            <p className='text-secondary font-semibold uppercase'>
                                {hr_name}
                            </p>
                        </div>


                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <LuNotebookText size={22}></LuNotebookText>
                                Requirements : </p>
                            <div className='text-secondary font-semibold'>
                                {
                                    requirements.map((req, i) => <p key={i}>{i+1}. {req}</p>)
                                }
                            </div>
                        </div>

                    </div>

                    <div className='flex-1 space-y-5'>

                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <TbCategory size={22}></TbCategory>
                                Category : </p>
                            <p className='text-secondary font-semibold'>
                                {category}
                            </p>
                        </div>

                        
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <LuMapPinned size={22}></LuMapPinned>
                                Location : </p>
                            <p className='text-secondary font-semibold'>
                                {location}
                            </p>
                        </div>

                                
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <PiWatch size={22}></PiWatch>
                                Deadline : </p>
                            <p className='text-secondary font-semibold'>
                                {applicationDeadline}
                            </p>
                        </div>
                                
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <IoMailUnreadOutline size={22}></IoMailUnreadOutline>
                                Email : </p>
                            <p className='text-secondary font-semibold'>
                                {hr_email}
                            </p>
                        </div>


                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-3 text-accent font-medium'>
                            <PiHandHeart size={22}></PiHandHeart>
                                Responsibilities :</p>
                            <div className='text-secondary font-semibold'>
                                {
                                    responsibilities.map((req, i ) => <p key={i}>{i+1}. {req}</p>)
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
                                
            <div className="divider"></div>


            <div className='border border-gray-200 p-5 rounded-lg'>
                <h2 className='text-2xl font-bold'>Description</h2>
                <div className="divider"></div>
                <p className='text-accent'>{description}</p>
                <div className="divider"></div>
                
            <div className='flex justify-between my-6 items-center'>
                <div className='space-y-2 flex items-center gap-1'>
                    <img src={company_logo} alt="" />
                    <h2 className='text-4xl font-bold text-secondary'>{company}</h2>                   
                </div>

                <div>
                    <Link to={`/job-apply/${_id}`}>
                    <button className='btn btn-primary px-10 text-lg font-light py-6 flex items-center'>
                        <MdOutlineVerified size={25}></MdOutlineVerified>
                        Apply Now</button>
                    </Link>
                </div>
            </div>
                
            </div>


        </div>
    );
};

export default JobDetails;