import {useState, React} from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios';
import {useGlobalContext} from "../context";

function Signup() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userImage,setUserImage] = useState('');
  const [redirect,setRedirect] = useState(false);

  const user = useGlobalContext();

  function registerUser(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('userImage', userImage);
    axios.post('http://obirijah-server.herokuapp.com/register', formData, {withCredentials:true})
      .then(response => {
        user.setEmail(response.data.email);
        setName('');
        setEmail('');
        setPassword('');
        user.setUserImage(response.data.imageUrl);
        setRedirect(true);
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
            <form action="" onSubmit={e => registerUser(e)} className='login-form px-4'>
              <h5 className="text-center text-bold text-white py-4">Register</h5>
              <p className="text-bold mt-2 mb-2 text-white">Name:</p>
              <input required autoFocus type="name" placeholder="Elon Musk" value={name} onChange={e => setName(e.target.value)} className='w-100 p-3 text-bold'/><br />
              <p className="text-bold mt-4 mb-2 text-white">Email:</p>
              <input required type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className='w-100 p-3 text-bold'/><br />
              <p className="text-bold mt-4 mb-2 text-white">Password:</p>
              <input required type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} className='w-100 p-3 text-bold'/><br />
              <p className="text-bold mt-4 mb-2 text-white">Your Photo:</p>
              <input required type="file" alt='mugu' name='userImage' onChange={e => setUserImage(e.target.files[0])} className='w-100 p-3 mb-3 text-bold'/><br />
              <Link to='/login' className='mt-4'>
                Have an account? Login
              </Link>
              <button type="submit" className='w-100 text-bold p-2 my-5'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;