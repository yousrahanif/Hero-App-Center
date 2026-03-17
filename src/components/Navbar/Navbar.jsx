import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { Github } from "lucide-react";


const Navbar = () => {
    const activeClass=({isActive})=>
         isActive ? "text-purple-600 underline" :"text-gray-700"
    
    return (
    
  <div className="navbar bg-base-100 shadow-sm md:px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li>      <NavLink className={activeClass}  to="/" >Home</NavLink></li>
        
           <li>  <NavLink className={activeClass}  to="/apps">Apps</NavLink></li>
            <li> <NavLink  className={activeClass} to="/installation">Installation</NavLink></li>
    
      </ul>
    </div>
    <div className="flex items-center">
        <img src={logo} className="w-10 h-10" alt="" />
            <NavLink to="/" className={`text-[#632EE3]`}>HERO.IO</NavLink>

    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
<li>      <NavLink className={activeClass}  to="/">Home</NavLink></li>
        
           <li>  <NavLink className={activeClass}  to="/apps">Apps</NavLink></li>
            <li> <NavLink className={activeClass}  to="/installation">Installation</NavLink></li>
    
   
    </ul>
  </div>
  <div className="flex navbar-end ">
   
    <a className="text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> <Github /> Contribute</a>
  </div>
</div>
      
    );
};

export default Navbar;