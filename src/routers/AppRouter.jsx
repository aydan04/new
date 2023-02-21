import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from '../pages/Service';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Pages from '../pages/Pages';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact'
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Header';
import FirstSection from '../components/FirstSection'
import Footer from '../components/Footer';
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
    <FirstSection/>
      <Routes>
        <Route path='/home' element={<Home />}>   </Route>
        <Route path='/service' element={<Service />}>  </Route>
        <Route path='/project' element={<Project />}>   </Route>
        <Route path='/pages' element={<Pages />}>   </Route>
        <Route path='/blogs' element={<Blogs />}>   </Route>
        <Route path='/contact' element={<Contact />}>   </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter