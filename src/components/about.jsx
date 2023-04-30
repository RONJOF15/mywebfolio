import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
                About
            </p>
        </div>
        
        <p className='text-xl mt-20'>
        I'm Ron Joshua Ferrer, graduate of Bachelor of Science in Computer Engineering. And began my career as cybersecurity threat engineer. My experience lead me to have interest a lot more in programming by analyzing and debugging programs. 
        </p>
        <br />
        <p className='text-xl'>
            I'm currently searching for a new opportunity in Software Engineering. With my background in CyberSecurity and skills in Program Analyzing, my ideal position involves Programming, for an employer with an exciting and forward thinking company, were my skills, qualities, and experience will be good to put use. 
        </p>
      </div>
    </div>
  )
}

export default about
