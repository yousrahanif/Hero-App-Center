
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { useState } from 'react';

const MainPage = () => {
    const [install, setInstall]=useState([])
   
    return (
        <div className='flex  flex-col  min-h-screen bg-[#D9D9D9]' >
            <Navbar></Navbar>
            <div className='flex-1 '>
  <Outlet context={{install,setInstall}}  ></Outlet>
            </div>
            <Footer></Footer>
          
        </div>
    );
};

export default MainPage;