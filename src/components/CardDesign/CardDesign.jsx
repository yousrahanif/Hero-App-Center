import { Download } from 'lucide-react';

import { Star } from 'lucide-react';
import { NavLink } from 'react-router';

const CardDesign = ({card}) => {
  const handleClick=(id)=>{
  console.log("Clicked", id)
  }
    const { id, image, title,ratingAvg,downloads }=card
    return (
       <NavLink to={`/cards/${id}`} onClick={()=>handleClick(id)} className="card bg-base-100 w-full shadow-xs">
  <figure >
    <img className='p-4 pt-6 w-100 h-80 object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   
    <p className=' font-semibold'>{title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline py-4 text-[#00D390] bg-[#F1F5E8] ">  <Download className='text-green-600' />{downloads}</div>
      <div className="badge badge-outline bg-[#FFF0E1] text-[#FF8811] py-4"> <Star className='text-orange-500' />{ratingAvg}</div>
    </div>
    
  </div>
</NavLink>
    );
};

export default CardDesign;