import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Signup } from './pages/Signup';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Dash } from './pages/Dash';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/dashboard/:id" element={<Dash />} />
          <Route path="/*" Component={NotFound} />
          <Route path="/contato" Component={Contato} />
          <Route path ="/aboutUS" Component={AboutUs}/>
          
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
