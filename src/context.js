import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
 
  axios.defaults.withCredentials= true;

  // LOGIN AND SIGNUP FORM
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [userImage, setUserImage] = useState('');
  const logout = () => {
    axios.post('http://obirijah-server.herokuapp.com/logout', {})
    .then(() => setName(''), setEmail());
  } 

  // TO-DO APP FUNCTIONS
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) =>{
    setTask(e.target.value)
  }
  

  const addTodo = (e) => {
    e.preventDefault();
    axios.put('http://obirijah-server.herokuapp.com/todos', {task:task, category: category}, {withCredentials:true})
    .then(response => {
      setTodos([...todos, response.data]);
      setTask('');
      setCategory('')
    })
  }

  const updateTodo = (todo) =>{
    const data = {id:todo._id,done:!todo.done};
    axios.post('http://obirijah-server.herokuapp.com/todos', data, {withCredentials:true})
      .then(() => {
        const newTodos = todos.map(t => {
          if (t._id === todo._id) {
            t.done = !t.done;
          }
          return t;
        });
        setTodos([...newTodos]);
      });
  }
  const deleteTodo = (_id) =>{
    axios.post('http://obirijah-server.herokuapp.com/delete', {id: _id}, {withCredentials:true})
    .catch((res)=>{
      alert(res)
    })
      setTodos(todos.filter((todo)=> todo._id !== _id))
  }

  // TIME
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date(Date.now()).toLocaleTimeString())
    }, 1000);
  }, [])

  // CREATE TASK MODAL
  const [taskModal, setTaskModal] = useState(false);
 

 return (
  <AppContext.Provider
   value={{
    name,
    setName,
    email,
    setEmail,
    userImage,
    setUserImage,
    logout, 
    //to-do functions
    todos: [todos, setTodos], 
    addTodo, 
    updateTodo, 
    task, 
    category,
    setCategory,
    handleChange,
    deleteTodo,
    //TASK MODAL
    taskModal,
    setTaskModal,
    // TIME
    time
   }}
  >
   {children}
  </AppContext.Provider>
 );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
