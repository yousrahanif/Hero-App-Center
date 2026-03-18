import { ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router';
import AppError from '../AppError/AppError';
import InstallCardDesign from '../CardDesign/InstallCardDesign';

const InstallationPage = () => {
    const {install}=useOutletContext()
    
   
   
  
    return (
         <section className='pt-8 bg-[#D9D9D9] mb-8'>
            <div className='mx-auto w-10/12 text-center '>
            <h1 className='text-3xl font-semibold pb-2 '>Your Installed Apps</h1>
            <h1 className='pb-2 text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</h1>
          
          <div className='flex justify-between py-4'>
            <div>
                <h1 className='text-lg font-semibold'>({install.length }) Apps Found</h1>
            </div>
            <div>
<div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size     <ChevronDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Ascending</a></li>
    <li><a>Descending</a></li>
  </ul>
</div>
            </div>

          </div>
       

            </div>
            <div>
                {
                    install.map(app=>  <InstallCardDesign key={app.id} card={app}></InstallCardDesign>)
                }
            </div>

          </section>
    );
};

export default InstallationPage;