
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className='flex  flex-col  min-h-screen bg-[#D2D2D2]' >
            <Navbar></Navbar>
            <div className=' mt-4 flex-1 '>
  <Outlet></Outlet>
            </div>
            <Footer></Footer>
          
        </div>
    );
};

export default MainPage;