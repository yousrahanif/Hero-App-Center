import appleStore from "../../assets/appleStore.jpg"
import googleStore from "../../assets/googlePlay.jpg"
import heroPng from "../../assets/hero.png"
import { NavLink, useLoaderData } from 'react-router';
import CardDesign from '../CardDesign/CardDesign';

const HomePage = () => {
  const data=useLoaderData()
  console.log(data)
    return (
        <div className='' >
            {/* First section */}
          <section className='text-center  mt-8'>
            <h1 className='text-4xl font-semibold p-2'>We Build</h1>
         
            <h1 className='text-4xl font-semibold'><span className="text-purple-600">Productive</span> Apps</h1>
<p className='p-2 text-lg text-[#627382]'>
    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
    <br />
    Our goal is to turn your ideas into digital experiences that truly make an impact.
</p>
<div className='flex justify-center p-2'>
    <a href='https://play.google.com/store/games?hl=en_US' className='btn bg-white  mx-4'>
        <img src={googleStore} alt="" className='w-5 ' />
        Google Play</a>
    <a href='https://www.apple.com/app-store/' className='btn mx-4 bg-white'>
                <img src={appleStore} alt="" className='w-7' />
App Store</a>

</div>
<div className='flex justify-center items-center'>
    <img src={heroPng} alt="" className='pt-8  ' />

</div>
<div className=' text-white  bg-linear-to-r from-[#632EE3] to-[#9F62F2] '>
    <h1 className='p-4  pt-8 text-3xl font-semibold '>Trusted by Millions, Built for You</h1>
    <div className='flex  justify-between w-8/12 mx-auto '>
        <div className='mx-4 p-4'>
            <h1 className='text-xs py-2'>Total Downloads</h1>
            <h1 className='text-2xl font-semibold'>29.6M</h1>
            <h1 className='text-xs py-2'>21% More Than Last Month</h1>


        </div>
        <div className='mx-4 p-4'>
            <h1 className='text-xs py-2'>Total Reviews</h1>
            <h1 className='text-2xl font-semibold'>906K</h1>
            <h1 className='text-xs py-2'>40% More Than Last Month</h1>


        </div>
          <div className='mx-4 p-4'>
            <h1 className='text-xs py-2'>Active Apps</h1>
            <h1 className='text-2xl font-semibold'>132+</h1>
            <h1 className='text-xs py-2'>31 More Will Launch </h1>


        </div>
        
    </div>

</div>
          </section>

          <section className='pt-8 bg-[#D9D9D9]'>
            <div className='mx-auto w-10/12 text-center '>
            <h1 className='text-3xl font-semibold pb-2 '>Trending Apps</h1>
            <h1 className='pb-2 text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
              data.slice(0,8).map(card=><CardDesign key={card.id} card={card}></CardDesign>)
            }


           </div>
             <div className="flex  justify-center p-4">
   
    <NavLink to="/apps" className="text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> Show All</NavLink>
  </div>

            </div>

          </section>
        </div>
    );
};

export default HomePage;