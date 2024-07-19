import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {

  return (
    <div className='bg-[#242424] h-[100vh]  text-white'>
      
      <div className='flex gap-5 p-20'>
    <img className="w-10" src='./imgreact/reactlogo.png' alt="React Logo" />
    <h1 className='text-4xl'>React</h1>
    
      </div>
      <hr className='w-full'></hr>
      <div className='flex flex-col items-center justify-center mt-14 '>
    <h1 className='text-4xl font-bold mt-4'>Fun facts about React</h1>
    <ul className='list-disc list-inside pl-7 mt-12 flex flex-col gap-2'>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
      </div>
  </div>
  )
}


