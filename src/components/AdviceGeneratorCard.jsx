import React, { useEffect } from 'react';
import IconDice from '../assets/icon-dice.svg';



const AdviceGeneratorCard = () => {
  const [advice, setAdvice] = React.useState('');

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data));
  }

  return (
    <div className='container rounded-md bg-DarkGrayshBlue flex flex-col w-full max-w-lg m-auto mt-60 p-5'>
      {
        !advice ?
          <>
            <h1 className='text-sm uppercase text-NeonGreen tracking-large text-center p-5'>Advice #000</h1>
            <p className='text-gray-400 text-lg font-extrabold text-center'>"No advice for now"</p>
          </>
          :
          <>
            <h1 className='text-sm uppercase text-NeonGreen tracking-large text-center p-5'>Advice #{advice.slip.id}</h1>
            <p className='text-gray-400 text-lg font-extrabold text-center'>"{advice.slip.advice}"</p>
          </>
      }
      <div className='flex space-x-1 justify-center p-5 items-center'>
        <div className='w-full h-[1px] bg-gray-400 opacity-25'></div>
        <div className='h-3 w-2 bg-gray-400 rounded-sm'></div>
        <div className='h-3 w-2 bg-gray-400 rounded-sm'></div>
        <div className='w-full h-[1px] bg-gray-400 opacity-25'></div>
      </div>
      <button onClick={() => getAdvice()} className='m-auto rounded-full bg-NeonGreen w-[40px] h-[40px] justify-center mb-[-40px] hover:shadow-lg hover:shadow-NeonGreen'>
        <img src={IconDice} className="m-auto object-contain w-[20px] h-[20px]" alt="" />
      </button>
    </div>
  )
}

export default AdviceGeneratorCard