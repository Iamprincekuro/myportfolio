import React from 'react'
import CTA from './CTA'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome, friend!</h5>
        <h1>Prince Kuro.</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header