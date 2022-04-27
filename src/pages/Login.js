import {React, useState} from 'react';
import axios from 'axios';
import {useGlobalContext} from "../context";
import {Link, Redirect} from "react-router-dom";

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loginError,setLoginError] = useState(false);
  const [redirect,setRedirect] = useState(false);

  const user = useGlobalContext();

  function loginUser(e) {
    e.preventDefault();
    axios.post('http://obirijah-server.herokuapp.com/login', {
      email: email,
      password: password,
      }, {withCredentials:true})
      .then(response => {
        user.setEmail(response.data.email);
        setEmail('');
        setPassword('');
        setLoginError(false);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err)
        setLoginError(true);
      });
  }

  if (redirect || user.email) {
    return <Redirect to={'/'} />
  }

  return (
    <div style={{marginLeft: `${window.innerWidth > 768 && window.innerWidth < 1000  ? '30%' : window.innerWidth > 1000 ? '20%' : 'unset'}`}}>
      <div className="container">
        <div className="row py-3 m-1" style={{backgroundColor: 'rgba(237, 234, 247, 0.1)', borderRadius: '15px'}}>
          <div className="col-12 col-md-6 mx-auto">
            <form action="" onSubmit={e => loginUser(e)} className='login-form px-4'>
              <h5 className="text-center text-bold text-white py-4">Login</h5>
              {loginError && (
                <div>LOGIN ERROR! WRONG EMAIL OR PASSWORD!</div>
              )}
              <p className="text-bold mt-2 mb-2 text-white">Email:</p>
              <input required autoFocus type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className='w-100 p-3 text-bold'/><br />
              <p className="text-bold mt-4 mb-2 text-white">Password:</p>
              <input required type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} className='w-100 p-3 text-bold mb-3'/><br />
              <Link to='/signup' className='mt-4'>
                New here? Sign Up
              </Link>
              <button type="submit" className='w-100 text-bold p-2 my-5'>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;