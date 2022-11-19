import React from 'react';
import '../styles/main.css';

export const Navbar = () => {
  return (
    <div>
        <div className='container flex flex-row space-x-0 mx-auto justify-between p-6 mb-10'>
            <h1 className='font-bold text-3xl md:text-4xl'>To-Do App</h1>
            <h1 className='text-3xl font-bold block'>Hamburger Menu</h1>
        </div>
    </div>
  )
}
