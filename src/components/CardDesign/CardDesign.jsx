import { Download } from 'lucide-react';

import { Star } from 'lucide-react';

const CardDesign = ({card}) => {
    const {id, image, title,companyName,description,size, reviews,ratingAvg,downloads, ratings }=card
    return (
       <div className="card bg-base-100 w-full shadow-xs">
  <figure >
    <img className='p-4 pt-6'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   
    <p className=' font-semibold'>{description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline py-4 text-[#00D390] bg-[#F1F5E8] ">  <Download />{size}</div>
      <div className="badge badge-outline bg-[#FFF0E1] text-[#FF8811] py-4"> <Star />{ratingAvg}</div>
    </div>
  </div>
</div>
    );
};

export default CardDesign;