import { React,  useEffect}from "react";
import { Link, Redirect } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios'
import { useGlobalContext } from "./context";

function Home() {
  const userInfo = useGlobalContext();
  const [todos, setTodos] = userInfo.todos
  const { updateTodo, deleteTodo, time} = useGlobalContext();
  const dueTodo = todos.filter((todo)=> todo.done === true);
  const unDueTodo = todos.filter((todo)=> todo.done === false);
   
  axios.withCredentials = true;
  useEffect(() => {
    axios.get('http://obirijah-server.herokuapp.com/todos', {withCredentials:true})
    .then(response => {
      setTodos(response.data.reverse());
    })
  }, [setTodos]);

  if (!userInfo.email) {
    return  <Redirect to={'/login'}/>;
  }

  const PF = 'http://obirijah-server.herokuapp.com/image/';

  const  emptyTodo = () =>{
    if (unDueTodo < 1) {
      return (
        <div className="undue-todo">
          <div className='row'>
            <div className="col-12">
              <div className="mx-auto">
                <img src={PF + userInfo.userImage} alt="" className='user-profile w-100'/>
                <Link to={userInfo.email ? '/creattodo' : '/login'} className=''>
                  <h5 className="text-center text-bold my-2 text-white">Tap to add your To-Do</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='d-flex' style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}}>
      <div className='container'>
        <div className="my-1">
          <h3 className="text-bold name" style={{color: 'white'}}>welcome aboard! {userInfo.email}</h3>
        </div>
        <div className='row' style={{marginRight: `${window.innerWidth > 1000 ? '38%' : 'unset'}`}}>
          {unDueTodo.length > 0 &&
            <h5 className="partial-white my-3">TO DO <h5 className="float-end mx-3">{unDueTodo.length}</h5></h5>
          }
          {emptyTodo()}
          {todos.map((todo) => {
            const {_id, text, done, category, date} = todo;
            if(done === false){
              return (
                <div ky={_id} className='col-12 col-md-6 col-lg-6 mb-2'>
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
                  <div className={`mt-2  ${done === true && 'text-muted text-done'}`}>{text.substring(0, 100)}</div>
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

      <div className="completed-wrapper container" style={{width: `${window.innerWidth > 1000 ? '30%' : 'unset'}`, display: `${window.innerWidth > 1000 ? 'block' : 'none'}`}}>
        <div className='time text-center w-100'>{time}</div>
        <p className="partial-white my-3">completed<span className="float-end mx-2">{dueTodo.length}</span></p>
        <div className="completed py-2">
          {todos.map((todo) => {
            const {_id,text, done, date} = todo;
            if(done === true){
              return (
                <div key={_id} className="col-12 mx-auto px-3">
                  <div className="todo-list d-flex align-items-center position-relative my-2 py-3 px-3">
                    <span className='d-flex align-items-center text mx-1'>
                      <input type="checkbox" defaultChecked={done} onClick={() => updateTodo(todo)} id='flexCheckDefault' className="form-check-input m-1"/>
                      <span className={done ? 'mx-2 text text-done text-muted' : 'mx-2 text'}>{text}</span>
                    </span>
                    <div onClick={()=> deleteTodo(_id)} className="delete-box mt-2">
                      <FaTrashAlt/>
                    </div>
                    <div className="date p-1">
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
  )
}

export default Home;