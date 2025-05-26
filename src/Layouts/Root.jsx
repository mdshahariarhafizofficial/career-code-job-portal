import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
        {/* Header */}
          <header>
            <div className='max-w-[1320px] mx-auto px-5 lg:px-0'>
              <Navbar></Navbar>
            </div>
          </header>

          {/* Main */}
          <main className='min-h-[calc(100vh-335px)]'>
            <div className='max-w-[1320px] mx-auto px-5 lg:px-0'>
              <Outlet></Outlet>
            </div>
          </main>

          {/* Footer */}
          <footer>
            <div className='max-w-[1320px] mx-auto px-5 lg:px-0'>
              <Footer></Footer>
            </div>
          </footer>
        </>
    );
};

export default Root;