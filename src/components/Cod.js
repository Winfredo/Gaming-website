import React from 'react'
import Fade from 'react-reveal/Fade';

const Cod = () => {
  return (

    <Fade bottom>
    <div className='w-full py-[2rem] ' >
        <p className='text-[1.5rem] font-bold text-center' > 
            Stay up to date on all the latest in gaming and entertainment.
        </p>
        <div className='mt-[2rem]'>
            <p className='text-[1.3rem] font-medium text-center lg:text-start ' >
                Step into mayhem
                <p className='text-sm xl:w-[20rem] text-center lg:text-start text-gray-200 '>
                    Fight across Brand-New Battlegrounds in season 04, now Live!
                </p>
            </p>
        </div>

        <div className='w-full mt-[1rem] flex  justify-center'>
        <img src={require("../images/cod.png")} alt=" "/>
        </div>
    </div>
    </Fade>
  )
}

export default Cod
