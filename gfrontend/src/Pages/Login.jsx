import axios from "axios"
import '../styles/Login.scss'
import React, {useState} from 'react'

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
          <input type="text" value={email} placeholder="username" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
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