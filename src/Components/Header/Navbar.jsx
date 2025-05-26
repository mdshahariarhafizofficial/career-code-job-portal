import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const menuLinks = <>
            <li>
              <NavLink to="/" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={
                ({isActive}) => 
                    isActive? "border-b-2 border-primary rounded-none text-primary" : ""
                }>Contact Us</NavLink>
            </li>
    </>
  return (
    <div className="navbar py-5 lg:px-0 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu space-y-4 text-lg font-bold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                menuLinks
            }
          </ul>
        </div>
        <Link to='/'>
            <img className="w-50" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-6 text-lg font-bold menu-horizontal px-1">
            {
                menuLinks 
            }
        </ul>
      </div>
      <div className="navbar-end gap-5 items-center">
            <Link to='' className='underline'>Register</Link>
            <Link to='' >
                <button className='btn btn-primary px-7 py-5'>Sing in</button>
            </Link>
      </div>
    </div>
  );
};


export default Navbar;