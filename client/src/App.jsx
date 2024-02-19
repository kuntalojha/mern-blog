// import React from "react";
// Before using the react-router-dom we have to install it and then
//We have to inpoet it where we use.
// We use this in the App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Route path from pages
// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

// Import  components
import Header from './components/Header';

export default function App() {
  return (
    // <BrowserRouter> is use for routing react pages
    <BrowserRouter>
      {/* Add Header component from components */}
      <Header />
      {/* Routes is use for add multiple route */}
      <Routes>
        {/* Route is use for add routing in the  react js app */}
        {/* path="it's contain the extension of root path or we can add root path here / is the root path or home  */}
        {/* path="it's contain the extension of root path or we can add root path here "  */}
        {/* element = {</>} We can add react functional component to the element*/}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
