import { React, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Categories() {

	const userInfo = useGlobalContext();
	const [value, setValue] = useState('all');
  const [todos] = userInfo.todos;
	const { updateTodo, deleteTodo} = useGlobalContext();
	const sub = Array.from(todos, ({category})=> category);
	const todoCategories = [...new Set(sub)]
  const unDueTodo = todos.filter((todo)=> todo.done === false);
  
  if(!userInfo.email) {
    return <Redirect to={'/login'} />
  }

	const  emptyTodo = () =>{
    if (unDueTodo < 1) {
      return (
        <div className="py-5">
          <div className='row'>
            <div className="col-md-8 mx-auto">
              <img src="../banner.png" className='w-100' alt='banner'/>
              <Link to={userInfo.email ? '/creattodo' : '/login'} className=''>
              <h5 className="text-center text-bold my-1 text-white">Tap to add your To-Do</h5>
            </Link>
            </div>
          </div>
        </div>
      )
    }
  }
 
  
	return (
		<div style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}}>
		<div className="container tx-white">
			<div className="category">
        {todos.length === 0 ||
				  <div onClick={()=> setValue('all')} className={`category-btn partial-white p-2 ${value === 'all' && 'category-btn-active'}`}>all</div>
        }
				{todoCategories.map((todo, index)=>{
					return (
						<div className=''>
							<div className={`category-btn partial-white p-2 ${todo === value && 'category-btn-active'}`} onClick={()=> setValue(todo)}>{todo}</div>
						</div>
					)
				})}
			</div>

			<div className='category-tab container p-2 pb-2'>
      {emptyTodo()}
			<div className="row">
				{todos.map((todo)=>{
				const {_id, text, category, done, date} = todo;
				if(category === value){
					return (
					<div ky={_id} className='col-12 col-md-4 col-lg-3 mb-2'>
						<div className="category-item mb-4 p-3">
						<div className="d-flex justify-content-between align-items-center mb-2 mx-0">
							<input type='checkbox' defaultChecked={done} onClick={() => updateTodo(todo)} id='flexCheckDefault' className="form-check-input"/>
							<div onClick={()=> deleteTodo(_id)} className="delete-box">
							<FaTrashAlt/>
							</div>
						</div>
						<div className={`mt-2  ${done === true && 'text-muted text-done'}`}>{text.substring(0, 100)}</div>
						<div className="date-badge p-1 px-2">
							{date.month} {date.time}            
						</div>
						</div>
					</div>
					)
				}
				if(value === 'all'){
					return (
					<div ky={_id} className='col-12 col-md-4 mb-2'>
						<div className="category-item mb-4 p-3">
						<div className="d-flex justify-content-between align-items-center mb-2 mx-0">
							<input type='checkbox' defaultChecked={done} onClick={() => updateTodo(todo)} id='flexCheckDefault' className="form-check-input"/>
							<div onClick={()=> deleteTodo(_id)} className="delete-box">
							<FaTrashAlt/>
							</div>
						</div>
						<div className={`category-text mt-2 ${done === true && 'text-muted text-done'}`}>{text.substring(0, 100)}</div>
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
