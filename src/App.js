import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading , setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },7000)
    
  },[])

  return (
    <div className="App">
      {
        loading ? <div className="loadddd"><ClimbingBoxLoader
        color={"#ec1839"}
        loading={loading}
        size={50}
      /></div>:<Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Route>
    </Routes>
      }
      
    </div>
  );
}

export default App;
