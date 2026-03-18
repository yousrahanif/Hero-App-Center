import { NavLink } from 'react-router';
import error from "../../assets/error-404.png"

const ErrorPage = () => {
    return (
       <div className='flex justify-center bg-white'>
        <div className="  w-96 justify-center bg-white">
  <figure className=" pt-10">
    <img
      src={error}
      alt="Shoes"
      className="rounded-xl mt-6 p-8 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-2xl font-bold">OPPS!! PAGE NOT FOUND</h2>
    <p className='text-light text-[#627382]'>The page you are looking for is not available.</p>
    <div className="card-actions">
   
       <NavLink to="/" className="btn text-white  bg-linear-to-r from-[#632EE3] to-[#9F62F2]">  Go Back!</NavLink>

   
    </div>
  </div>
</div>

       </div>
    );
};

export default ErrorPage;