import React from 'react';
import { FaCalendar } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";
import './pages.css';

export default function CreatTodo() {

  const userInfo = useGlobalContext();
  const {task, setCategory, handleChange, addTodo} = useGlobalContext();

  const time = new Date(Date.now()).toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
  const day = new Date().getDate();
  const months = ['jan', 'feb', 'mar', 'april', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
  const month = months[new Date().getMonth()]

  if(!userInfo.email) {
    return <Redirect to={'/login'} />    
  }
  
  return (
    <div style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}} className=' new-tasks'>
    <div className="container">
      <form action='#' className="new-task px-4" onSubmit={addTodo}>
      <h5 className="text-center text-bold text-white py-4">New task</h5>
      <textarea value={task} onChange={handleChange} required id="" cols="30" rows="10" autoFocus placeholder='What are you planning?' maxLength='100' miniLength='70' className='p-2 mb-2'></textarea>
      <h6 className="text-white">Category :</h6>
      <div className="mx-1">
        <div className="d-flex align-items-center my-1">
        <input type="radio" value='home' id='home' name='flexRadioDefault' onClick={(e)=> setCategory(e.target.value)} required className="form-check-input"/>
        <label className="mx-1 text-white text-capitalize">
          home
        </label>
        </div>
        <div className="d-flex align-items-center my-1">
        <input type="radio" value='work' id='work' name='flexRadioDefault' onClick={(e)=> setCategory(e.target.value)} required className="form-check-input "/>
        <label className="mx-1 text-white text-capitalize">
          work
        </label>
        </div>
        <div className='d-flex align-items-center my-1'>
        <input type="radio" value='education' id='education' onClick={(e)=> setCategory(e.target.value)} required name='flexRadioDefault' className="form-check-input"/>
        <label className="mx-1 text-white text-capitalize">
          education
        </label>
        </div>

      </div>
      <div className="d-flex align-items-center text-white my-3">
        <span>
        <FaCalendar className='my-2'/>
        </span>
        <div className="text-white mx-2 text-capitalize">
        {month} {day},
        {time}
        </div>
      </div>
      <button className="w-100 mb-4 p-2" type='submit'><span className="text-center">Create</span></button>
      </form>
    </div>
    </div>
  )
}
