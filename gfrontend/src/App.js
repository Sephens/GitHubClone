import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "../src/Pages/SignUp";
import Login from "../src/Pages/Login";
import Home from '../src/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
