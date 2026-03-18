import { ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router';
import AppError from '../AppError/AppError';
import InstallCardDesign from '../CardDesign/InstallCardDesign';
import { useState } from 'react';

const InstallationPage = () => {
    const {install}=useOutletContext()
    const [sortedList, setSortedList]=useState(install)
    
   const assendening=()=>{
    setSortedList( [...install].sort((a,b)=>parseFloat(a.downloads)-parseFloat(b.downloads)))
   }
   
   const dessendening=()=>{
    setSortedList(  [...install].sort((a,b)=>parseFloat(b.downloads)-parseFloat(a.downloads)))
   }
  
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
  <div tabIndex={0} role="button" className="btn m-1">Sort By Downloads     <ChevronDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={assendening} >Ascending</a></li>
    <li><a onClick={dessendening}>Descending</a></li>
  </ul>
</div>
            </div>

          </div>
       

            </div>
            <div>
                {
                    sortedList.map(app=>  <InstallCardDesign key={app.id} card={app}></InstallCardDesign>)
                }
            </div>

          </section>
    );
};

export default InstallationPage;