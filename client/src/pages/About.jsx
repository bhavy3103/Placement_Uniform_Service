import Header from '@/components/SideHeader'
import React from 'react'

const About = () => {
  return (
    <div className="flex">
      {/* Left side - Header */}
      <div className="w-1/4">
        <Header />
      </div>

      {/* Right side - Page Content */}
      <div className="w-3/4 p-5">
        <p className="text-5xl mt-5">Welcome to About page</p>
      </div>
    </div>
  )
}

export default About
