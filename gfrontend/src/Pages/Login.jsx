import '../styles/Login.scss'
import  PropTypes from 'prop-types';
import React, {useState} from 'react'

async function loginUser(credentials){
  return fetch('http://localhost:8080/login', {
    method: 'POST' ,
    headers: {
      'ContentType': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json)
}


function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit =async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    <div className='login-wrapper'>
    <h2>Please Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" placeholder="username" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type='submit'>Log In</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;