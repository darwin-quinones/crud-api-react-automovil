import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';

// components

import CarList from './components/Car/CarList.jsx'
import CarCreate from './components/Car/CarCreate.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<CarList></CarList>}></Route>
          <Route exact path='/crear' element={<CarCreate></CarCreate>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
