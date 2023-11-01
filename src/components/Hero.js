import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col xl:flex-row xl-h-screen justify-center pt-[5rem] w-full' >
      <div className='flex flex-col flex-1 h-full xl-items-start justify-center text-white text-center xl-text-start space-y-8 mb-[4rem]' >
        <p className='text-[#e87d0e] font-medium ' >Proved by prodesigner</p>
        <h1 className='text-[2rem] font-bold w-full xl:w-[25rem]' >
            Work that we produce for our clients
        </h1>
      </div>
    </div>
  )
}

export default Hero
