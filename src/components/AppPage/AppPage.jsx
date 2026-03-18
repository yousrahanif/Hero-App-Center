import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CardDesign from '../CardDesign/CardDesign';
import AppError from '../AppError/AppError';

const AppPage = () => {
     const data=useLoaderData()
     const [search, setSearch]=useState("")
     const matching = data.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
    //  if(search && matching.length===0){
    //   navigate("/appError")
    //  }
    return (
         <section className='pt-8 bg-[#D9D9D9] mb-8'>
            <div className='mx-auto w-10/12 text-center '>
            <h1 className='text-3xl font-semibold pb-2 '>Trending Apps</h1>
            <h1 className='pb-2 text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</h1>
          
          <div className='flex justify-between py-4'>
            <div>
                <h1 className='text-lg font-semibold'>({matching.length}) Apps Found</h1>
            </div>
            <div>
<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setSearch(e.target.value)}  type="search" required placeholder="Search" />
</label>
            </div>

          </div>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
matching.length>0 ? (
              matching.map(card=><CardDesign   key={card.id} card={card}></CardDesign>)

): <div> <AppError></AppError> </div>
            }


           </div>
             {/* <div className="flex  justify-center p-4">
   
    <a className="text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> Show All</a>
  </div> */}

            </div>

          </section>
    );
};

export default AppPage;