import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import {Link} from 'react-scroll'
const home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full py-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
                Graduate of BS in Computer Engineering 
            </h2>
            <p className='text-gray-500 py-4 px-4 max-w-md'>
                I am Tech-savvy and a fast learner with extensive knowledge of cyber security, computer hardware and software systems. I am willing to embraced taking on challenges and learn new software building database or applications and software security.
            </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-800 to-cyan-800 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-200'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-100' />
            
        </div>
      </div>
    </div>
  )
}

export default home
