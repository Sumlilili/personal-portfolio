import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/contact'
import Project from './components/project'
import Layout from './components/Layout'
import Services from './components/services'
const MainRouter = () => {
return (
<div>
<Layout/>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/projects" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/services" element={<Services />} />
</Routes>
</div>
)
}
export default MainRouter
