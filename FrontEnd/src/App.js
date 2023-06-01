import './App.css';
import Home from './Home';
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import { Navbar } from './navbar';
import Kart from './Kart';
import Register from './Register';
import FreshProduce from "./components/FreshProduce";
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import { LoginContext } from './Context.js/LoginContext';

function App() {
  const [cartData, setCartData] = React.useState([])
  return (
    <BrowserRouter>
      <Navbar />
      <LoginContext.Provider value={{ cartData, setCartData }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Kart' element={<Kart />} />
          <Route path="/:categoryName" element={<FreshProduce />}></Route>
          <Route path="/:categoryName/v/:id" element={<Vegetables />}></Route>
          <Route path="/:categoryName/f/:id" element={<Fruits />}></Route>
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
