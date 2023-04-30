import React from 'react'
import cybersec from '../assets/portfolio/cybersec.jpg'
import dbase from '../assets/portfolio/dbase.jpg'
import jscript from '../assets/portfolio/jscript.jpg'
import microcon from '../assets/portfolio/microcon.jpg'
import python from '../assets/portfolio/python.jpg'
import vbnet from '../assets/portfolio/vbnet.png'
const portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: cybersec,
            demo: 'https://www.w3schools.com',
        },
        {
            id: 2,
            src: dbase,
            demo: 'https://www.w3schools.com',
            
        },
        {
            id: 3,
            src: jscript,
            demo: 'https://www.w3schools.com',
            
        },
        {
            id: 4,
            src: microcon,
            demo: 'https://www.tinkercad.com/users/6W1YPTgHcH4?category=circuits&sort=likes&view_mode=default',
            
        },
        {
            id: 5,
            src: python,
            demo: 'https://www.w3schools.com',
            
        },
        {
            id: 6,
            src: vbnet,
            demo: 'https://www.w3schools.com',
            
        },

    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Portfolio
                </p>
            <p className='py-6'>
                Check out some of my work right here.
                </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-5'>
            {portfolios.map(({id, src, demo}) => (
                <div key={id} className='shadow-md shadow-orange-500 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-300 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={`${demo}`} className='w-1/2 px-0 py-0 m-2 duration-300 hover:scale-110'>
                            Demo
                            </a>
                        <a className='w-1/2 px-0 py-0 m-2 duration-300 hover:scale-110'>
                            Code
                            </a>
                </div>
            </div>
            )
            )}
        </div>
      </div>
    </div>
  )
}

export default portfolio
