import React from 'react'
import './Navbar.css'
import { navLinks } from "../data";

export default function Navbar() {
 
 return (
  <div className=''>
   <div className="navbar">
    {navLinks.map((link)=>{
      const {links} = link;
      return (
       <div>       
        {links.map((link_id)=>{
         const {id, link, icon} = link_id;
         return (
          <div key={id} className='navbar-link w-100'>
           <div className="icon">{icon}</div>
           <a href="#">{link}</a>
          </div>
         )
        })}
        <hr/>
       </div>
      )
     })}
   </div>
  </div>
 )
}
