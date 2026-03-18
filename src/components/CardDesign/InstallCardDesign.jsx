import React from 'react';

import { Download, Star, ThumbsUp } from 'lucide-react';
import { NavLink } from 'react-router';


const InstallCardDesign = ({card}) => {
    return (
        <div className=' '  >
            <div className='flex  justify-center mx-auto w-full  my-4'>
                 <div className='mr-4 '>
                <img src={card.image}  className="w-48 h-48" alt="" />
             
            </div>
            <div className='border-2 border-mist-300 p-2'>
      <div className=''>
                
                
<div className='flex h-20 w-96 justify-between'>
    <div>
                                     <h1 className='text-lg font-semibold'> {card.title}</h1>

    </div>
                             <div>
                                <NavLink  className='btn  bg-green-500 text-white text-sm mx-4' >Uninstall</NavLink>

                             </div>
</div>
<div className='flex '>
                       <h1 className='flex text-lg font-extralight mr-4'> <Download className='text-green-600' />{card.downloads}</h1>
                       <h1 className='flex text-lg font-extralight mr-4'> <Star className='text-orange-600' />{card.ratingAvg}</h1>
                       <h1 className='flex text-lg font-extralight'> {card.size}</h1>

</div>

    </div>
          
           
            </div>

            </div>
           
   
    

        </div>
    
  
  
  

    );
};

export default InstallCardDesign;