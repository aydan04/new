import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}>   </Route>
        <Route path='/about' element={<About />}>  </Route>
        <Route path='/contact' element={<Contact />}>   </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter