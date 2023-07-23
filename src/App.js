
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Student from "./pages/Student";
import ContectUs from "./pages/ContectUs";


function App() {
  return (
    <div className="App">

      <Navbar />

      <div className='routers'>
        <Routes>
          <Route path='/' />
          <Route path='/Home' element={<Home />} />
          <Route path='/Student' element={<Student />} />
          <Route path='/ContectUs' element={<ContectUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
