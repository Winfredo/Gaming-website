import React from 'react'
import TrendingCard from './TrendingCard'

const Trending = () => {
  return (
    <div className='w-full py-[4rem] ' >
        <div className='flex flex-col flex-1 xl:flex-row xl:space-y-0  justify-between items-center' >
            <p className='text-[1.4rem] text-center font-bold text-white' >Currently Trending games</p>
            <button className='w-[6rem] h-[2rem] my-3 bg-[#160e46] text-sm font-bold rounded-[10px] ' >SEE ALL</button>
        </div>

        <div className='flex flex-1 flex-wrap items-center justify-center xl:justify-between sm:space-x-4 xl:space-x-0 mt-[4rem]' >
            <TrendingCard image={require("../images/card1.png")}/>
            <TrendingCard image={require("../images/card2.png")}/>
            <TrendingCard image={require("../images/card3.png")}/>
            <TrendingCard image={require("../images/card4.png")}/>

        </div>
    </div>
  )
}

export default Trending
