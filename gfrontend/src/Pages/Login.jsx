import axios from "axios"
import '../styles/Login.scss'
import React, {useState} from 'react';
import Cookies from 'universal-cookie'

// async function loginUser(credentials){
//   return fetch('http://localhost:8080/login', {
//     method: 'POST' ,
//     headers: {
//       'ContentType': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//   .then(data => data.json)
// }


function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  const cookies = new Cookies();

const handleSetEmail = (e) => {
  setEmail(e.target.value)
}

const handleSetPassword = (e) => {
  setPassword(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const configuration = {
    method: "post",
    url: "http://localhost:8080/login",
    data: {
      email,
      password,
    },
  };
  axios(configuration)
  .then((result)=>{
    setLogin(true);
    console.log(result);

    // This code above sets the cookie with cookie.set(). It takes three arguments: Name of the cookie (here it's "TOKEN", but it can be anything that you choose), Value of the cookie (result.data.token), and on which page or route you want it to be available (setting the path to "/" makes the cookie available in all the pages).
    cookies.set("TOKEN", result.data.token,{
      path: "/",
    });

    window.location.href("/Profile")
  })
  .catch((er) => {
    er = new Error();
  })

}
  return (
    <div className='login-wrapper'>
    <h2>Please Log In</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          <p>Email</p>

          <input type="text" value={email} placeholder="username" onChange={handleSetEmail}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} placeholder="password" onChange={handleSetPassword}/>
        </label>
        <div>
          <button type='submit' onClick={(e)=>handleSubmit(e)}>Log In</button>
        </div>
        {login ? (
          <p className="text-success">Login Successful</p>

        ) : (
          <p className="text-danger">You are not Logged in</p>
        )}
      </form>
    </div>
  )
}
export default Login;