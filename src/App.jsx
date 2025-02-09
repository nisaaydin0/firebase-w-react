import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up' element={<SingUp/>} />
        <Route path='/sign-in' element={<SingIn/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
    </Router>
  )
}

export default App
