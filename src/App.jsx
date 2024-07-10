import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag';

const App = () => {
  return (
    <div className="background w-[100vw] h-[100vh] overflow-x-hidden flex flex-col  items-center">
      <h1  className= ' bg-white w-10/12 flex text-center items-center mt-3 justify-center py-2 font-bold text-2xl rounded-md  '>
        RANDOM GIF
      </h1>
      <div className='flex flex-col w-full items-center '>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}

export default App
