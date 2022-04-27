import React from 'react';
import { FaBell, FaSistrix, FaUserPlus, FaUserTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './nav.css';
import {useGlobalContext} from "../context";
import Links from '../data';
import logo from '../logo.png'

export default function Navbar() {

  const userInfo = useGlobalContext();
	const [todos] = userInfo.todos;
  const {logout} = useGlobalContext();
  const uncompletedTasks = todos.filter((todo)=> todo.done === false);

  return (
    <div style={{position: 'sticky', top: '0', zIndex: '1'}}>
    <div className="d-nav" style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`, width: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '70%' : window.innerWidth > 1000 ? '80%' : 'unset'}`}}>
      <div className="d-navbar py-3 container">
      <div className="title">task manager</div>
      <span>
        <span className="icon-badge p-2">
        <FaBell/>
        <div className="notify px-1">{uncompletedTasks.length}</div>
        </span>
        <span className="icon-badge p-2 mx-2">
        <FaUserPlus/>
        </span>
        <input type="search" className="search-input p-1"/>
        <span className="search-icon p-2">
        <FaSistrix/>
        </span>
      </span>
      </div>
    </div>
   
    <div className="d-sidebar" style={{width: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}}>
      <img src={logo} alt="" className='w-100 my-2 mx-auto'/>
      {Links().map(({text, url, icon}, index)=>{
        return (
          <div key={index} className={window.location.pathname === `${url}` && {text} ? "sidebar-text active" : "sidebar-text"}>
            <Link className='Link' to={url}>
              <span className="icon">{icon}</span>
              <span className='text-white'>{text}</span>
            </Link>
          </div>
        )
      })}
      <hr className='hr'/>
      {userInfo.email && 
        <div>
          <div onClick={()=> logout()} className="Link">
          <FaUserTimes className='icon'/>
          <span className='text-white'>logout</span>
          </div>
        </div>
      }
      </div>
    </div>
  )
}
