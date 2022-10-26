import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';

// components

import CarList from './components/Car/CarList.jsx'
import CarCreate from './components/Car/CarCreate.jsx'
import CarEdit from './components/Car/CarEdit.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<CarList></CarList>}></Route>
          <Route exact path='/crear' element={<CarCreate></CarCreate>}></Route>
          <Route exact path='/editar/:id' element={<CarEdit></CarEdit>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
