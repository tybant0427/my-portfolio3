import React from 'react'
import CV from '../../assets/MyNewestResume2 (1).pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA
