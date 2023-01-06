import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout=()=>{
return(<> 
<Link id="title" to="/" className='link'>LODDGIN</Link>
 <nav>
    <ul>
      
      <li>
        <Link to="/" className='link'>Home</Link>
      </li>
      <li>
        <Link to="/Srearch" className='link'>Srearch</Link>
      </li>
      
   
    </ul>
  </nav>

  <Outlet /></>)
}
export default Layout