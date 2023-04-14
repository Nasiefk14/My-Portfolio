import React from 'react'

const Contact = () => {
  return (
    <div className='contact w-full h-screen bg-[#05386B] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/2375c45d-b671-4732-9d21-ba913639b7e7" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-[#5CDB95] text-[#edf5e1]'>Contact</p>
                <p className='text-[#edf5e1] py-4'>Leave Your Details Below Or Reach Out To Me Via Email @ <b>Nasiefk14@gmail.com</b></p>
            </div> 
            <input type="text" name='name' placeholder='Name' className='bg-[#e9e1f5] p-2 placeholder:font-bold'/>
            <input type="text" name='email' placeholder='Email Address' className='my-4 p-2 bg-[#e9e1f5] placeholder:font-bold'/>
            <textarea name="message" placeholder='  Lets Hear Your Thoughts...' rows={10} className='bg-[#e9e1f5] placeholder:font-bold' ></textarea>
            <button className='text-[#edf5e1] border-2 hover:bg-[#5CDB95] hover:border-[#5CDB95] hover:font-bold px-3 py-3 my-8 mx-auto items-cenetr'>Lets Connect!</button>
        </form>
    </div>
  )
}

export default Contact