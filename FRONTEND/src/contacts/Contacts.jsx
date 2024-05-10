import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contacts