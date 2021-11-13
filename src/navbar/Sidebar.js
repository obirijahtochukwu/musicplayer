import { React, useState } from 'react'
import { FaAlignJustify, FaPlus, FaTimes } from "react-icons/fa";
import { navLinks } from "../data";

export default function Sidebar() {

 const [sideBar, setSideBar] = useState(false);

 return (
  <div className='mobile-navbar'>
   <div className="sidebar-header">
    <FaAlignJustify onClick={()=> setSideBar(true)} className='icon'/>
    <span className='sidebar-con-title'>
     <span className="sidebar-title">Library</span>
     <span className="sidebar-title">Music</span>
     <span className="sidebar-title">Buzz</span>
    </span>
    <FaPlus className='icon'/>
   </div>
   <div className={sideBar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
    <div className="sidebar">
     {navLinks.map((link)=>{
      const {links} = link;
      return (
       <div>
        <div className="left icon">
         <FaTimes onClick={()=> setSideBar(false)}/>
        </div>
        {links.map((link_id)=>{
         const {id, link, icon} = link_id;
         return (
          <div key={id} className='link'>
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
  </div>
 )
}
