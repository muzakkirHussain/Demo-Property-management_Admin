import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'sonner';
import { Toaster } from 'sonner';
import Navbar from '../Components/Navbar';
import '../Components/Navbar/Navbar.scss';

function Template() {
  return (
    <>
      <Toaster richColors closeButton />

      <div className="template">
        <Navbar />

        <Outlet className="outLet" />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Template;
