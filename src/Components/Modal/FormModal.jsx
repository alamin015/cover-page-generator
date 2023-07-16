import React from 'react'

const FormModal = ({handleForm}) => {





  return (
      <div className=' mx-auto px-5 py-5 border border-[#2D7136] my-10 bg-white max-w-[700px] w-full shadow-lg rounded-lg'>
        <form onSubmit={handleForm}>
          <div className='flex items-center my-3'>
              <p className='text-xl text-[#2D7136] font-medium'>Submitted By</p>
              <hr className='border border-[#2D7136] flex-grow mt-2' />
            </div>
            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='name' placeholder='Enter Your name' />
            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='course_title' placeholder='Course Title' />
            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='course_code' placeholder='Course Code' />


            <div className='flex items-center justify-between gap-2'>
              <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='student_id' placeholder='Student ID' />
              <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='session' placeholder='Session' />
            </div>

            <div className='flex items-center justify-between gap-2'>
              <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='year' placeholder='Year' />
              <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='semester' placeholder='Semester' />
            </div>

            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='dept_name' placeholder='Department Name' />

            <div className='flex items-center my-3'>
              <p className='text-xl text-[#2D7136] font-medium'>Submitted to</p>
              <hr className='border border-[#2D7136] flex-grow mt-2' />
            </div>

            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='course_teacher' placeholder='Course Teacher' />

            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='title' placeholder='Title' />
            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='t_dept' placeholder='Department Name' />

            <input type="text" className='p-2 mb-2 rounded-lg border outline-none w-full' name='institution' placeholder='Institution Name' />

            <input type="date" className='p-2 mb-2 rounded-lg border outline-none w-full' placeholder='Date' name='date' />
            <div className='text-right mt-7'>
              <button className='py-2 px-6 border-none bg-green-800 text-white font-medium text-base rounded-lg'>Submit</button>
            </div>
        </form>
      </div>
  )
}

export default FormModal