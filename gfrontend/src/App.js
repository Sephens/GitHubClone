import './App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Profile from './Pages/Profile'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer'
import { useState } from 'react';
import Login from '../src/Pages/Login'

function App() {
  const [token, setToken] = useState();
  // condition to display Login if the token is false
  // pass the setToken function to the Login component
  // check to display Login component on every route if the user is not yet logged in.
  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
