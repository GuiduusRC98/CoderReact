import React from 'react'
import '../styles/LoadingSpinner.css'
import icon from '../images/art3d_icon.jpg'

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
        <div className="spinner"></div>
        <img className="spinner-logo" src={icon} alt="" />
    </div>
  )
}

export default LoadingSpinner