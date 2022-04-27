import {React, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { useGlobalContext } from './context';
import axios from "axios";
import Navbar from './navigation/Navbar'
import Sidebar from './navigation/Sidebar'
import Signup from './pages/Signup'
import Login from "./pages/Login";
import Home from "./Home";
import Analytics from './pages/Analytics';
import Categories from './pages/Categories';
import CreatTodo from './pages/CreatTodo'

function App() {
  const user = useGlobalContext();
  
  useEffect(() => {
    axios.get('http://obirijah-server.herokuapp.com/user', {withCredentials:true})
      .then(response => {
        user.setEmail(response.data.email);
        user.setUserImage(response.data.image);
      });
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
          <Switch>
            
            <Route exact path={'/'} component={Home} />
            <Route path={'/login'} component={Login} />
            <Route path={'/signup'} component={Signup} />
            <Route path={'/categories'} component={Categories} />
            <Route path={'/analytics'} component={Analytics} />
            <Route path={'/creattodo'} component={CreatTodo} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
