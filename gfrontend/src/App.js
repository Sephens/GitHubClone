import './App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Profile from './Pages/Profile'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';

function App() {
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
