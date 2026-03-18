import { Download, Star, ThumbsUp } from 'lucide-react';
import SimpleBarChart from './SimpleBarChart';
import { NavLink, useLoaderData, useOutletContext, useParams } from 'react-router';
import AppError from '../AppError/AppError';
import download from "../../assets/download.png"
import rating from "../../assets/rating.png"
import review from "../../assets/review.png"
import { useState } from 'react';
import Swal from 'sweetalert2';




const CardDescription = () => {

    const {setInstall, install}=useOutletContext()
    const [clicked, setClicked] = useState(false);
     const handleNewUpdate=(newData)=>{
        setInstall(prev => [...prev, newData]);

 setClicked(true); 
 Swal.fire({
  title: "Successfully Installed!",
  text: "You clicked the button!",
  icon: "success"
});
    }
    
    const {id}=useParams()
    const cards=useLoaderData()

    const card =cards.find(c=>c.id===parseInt(id))
    if(!card) return <AppError></AppError>
            const isInstalled=install.find(app=>app.id===card.id)? true: false

    return (
        <div className=' flex flex-col justify-center'>
            {/* Card */}
          

<section>
    <div className='flex flex-col md:flex-row  md:justify-items-start   mx-auto w-11/12'>
        <div >
             <figure className='w-80 h-80 object-cover radio-sm p-2'>
    <img
      src={card.image}
      alt="Movie" />
  </figure>
        </div>
         <div className='md:my-2 md:mx-8  '>
            <h2 className="card-title  py-2">{card.title}: {card.subtitle}</h2>
  <p className='font-light'>Developed by <span className='text-purple-600'>{card.companyName}</span></p>

<hr className="mt-4 w-full  bg-mist-50 text-white " /> 
<div className='flex'>
   <div className='py-2'>
            {/* <h1 className='text-xs py-2 text-green-600'> <Download /></h1> */}
           <img src={download} alt="" />
            <h1 className='text-xs py-2'>Downloads</h1>

            <h1 className='text-xl font-semibold'>{card.downloads}</h1>


        </div>
          <div className='py-2 mx-12'>
                       <img src={rating} alt="" />

            {/* <h1 className='text-xs py-2 text-orange-700 mx-8'>    <Star /></h1> */}
            <h1 className='text-xs py-2 '>Average Rating</h1>

            <h1 className='text-xl font-semibold  '>{card.ratingAvg}</h1>


        </div>
          <div className='py-2'>
                       <img src={review} alt="" />

            <h1 className='text-xs py-2'>Total Reviews</h1>

            <h1 className='text-xl font-semibold'>{card.reviews}</h1>


        </div>

  


</div>
  <div className='justify-start'>
              <NavLink to="/installation" onClick={(e)=>{
                if(!isInstalled){
                     handleNewUpdate(card)
                }
                else{
                    e.preventDefault()
                }
               
                }}  disabled={clicked}   className={`btn ${isInstalled ? "bg-gray-200 cursor-not-allowed" : "bg-green-500"} `} >{isInstalled ? "Installed":"Install Now"}</NavLink>

    </div>
    </div>
    
    </div>
  
  
</section>
<hr className="mt-4 w-full  bg-mist-50 text-white " /> 


            {/* graph */}
            <section className='mx-auto w-11/12 m-4'>

                <h1 className='text-xl font-bold py-2'>Ratings</h1>

                <SimpleBarChart card={card}></SimpleBarChart>
            </section>
{/* description */}
<hr className="mt-4 w-full  bg-mist-50 text-white " /> 

            <section className='mx-auto w-11/12 py-4'>
                <h1 className='text-xl font-bold'>Description</h1>
                <p className='font-light py-2'>{card.description}</p>
            </section>
            
        </div>
    );
};

export default CardDescription;