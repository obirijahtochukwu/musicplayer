import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";


export default function Analytics() {

  const userInfo = useGlobalContext();
  const [todos] = userInfo.todos;
  const { updateTodo, deleteTodo} = useGlobalContext();

  if (!userInfo.email) {
    return <Redirect to={'/login'} />
  }

  return (
    <div style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}}>
      <div className="container">
        <h5 className="text-white text-bold text-uppercase my-2">completed tasks</h5>
        <div className=" container category-tab pt-2">
          <div className="row">
          {todos.map((todo) => {
            const {_id, text, done, category, date} = todo;
            if(done === true){
              return (
                <div ky={_id} className='col-12 col-md-4 mb-2'>
                  <div className="todo-list mb-4 p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2 mx-0">
                    <div className="text-bold text-primary text-capitalize">{category}</div>
                    <span className='d-flex align-items-center'>
                      <input type='checkbox' defaultChecked={done} onClick={() => updateTodo(todo)} id='flexCheckDefault' className="form-check-input mx-2"/>
                      <div onClick={()=> deleteTodo(_id)} className="delete-box">
                      <FaTrashAlt/>
                      </div>
                    </span>
                  </div>
                  <div className={`mt-2 ${done === true && 'text-muted text-done'}`}>{text.substring(0, 100)}</div>
                  <div className="date-badge p-1 px-2">
                    {date.month} {date.time}            
                  </div>
                    </div>
                </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
