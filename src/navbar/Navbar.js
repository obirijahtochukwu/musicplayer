import React from 'react'
import './Navbar.css'
import { navLinks } from "../data";

export default function Navbar() {
 
 return (
  <div className='w-100'>
   <div className="navbar d-block">
    {navLinks.map((link)=>{
      const {links} = link;
      return (
       <div>       
        {links.map((link_id)=>{
         const {id, link, icon} = link_id;
         return (
          <div key={id} className='navbar-link w-100'>
           <div className="icon">{icon}</div>
           <span>{link}</span>
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
