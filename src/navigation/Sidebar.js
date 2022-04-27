import {React, useState} from 'react';
import { FaAlignLeft, FaSistrix, FaBell, FaTimesCircle, FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './nav.css';
import Links from '../data';
import logo from '../logo.png';
import {useGlobalContext} from "../context";


export default function Sidebar() {

  const userInfo = useGlobalContext();
  const [todos] = userInfo.todos
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {logout} = useGlobalContext();
  const uncompletedTasks = todos.filter((todo)=> todo.done === false);

 return (
  <div className='d-md-none'>
    <div className="sidebar-header d-md-none">
      <div className="content py-3 container">
        <span className="icon mx-2">
          <FaAlignLeft onClick={()=> setIsSidebarOpen(true)}/>
          <img src={logo} alt="" className=''/>
        </span>     
        <span>
          <span className="icon-badge p-2">
            <FaBell/>
            <div className="notify px-1">{userInfo.email && uncompletedTasks.length}</div>
          </span>
          <span className="icon-badge p-2 mx-2">
            <FaSistrix/>
          </span>
        </span>
      </div>
    </div>

    {/* SIDEBAR */}
    <div className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <div className="sidebar">
        <br/>
        <img src={logo} alt="" className='mt-2 mx-auto'/>
        <hr/>
        <FaTimesCircle onClick={()=> setIsSidebarOpen(false)} className=' close-btn'/>
        {Links().map(({text, url, icon}, index)=>{
          return (
            <div key={index} className={window.location.pathname === `${url}` && {text} ? "sidebar-text active" : "sidebar-text"}>
              <Link className='Link' to={url} onClick={()=> {setIsSidebarOpen(false)}}>
              <span className="icon">{icon}</span>
              <span className="text-white">{text}</span>
              </Link>
            </div>
          )
        })}
        <hr className='hr'/>
        {userInfo.email && 
          <div className="logout ml-1" onClick={logout}>
            <FaUserTimes className='icon'/>
            <span>logout</span>
          </div>
        }
      </div>
    </div>
  </div>
  )
}
