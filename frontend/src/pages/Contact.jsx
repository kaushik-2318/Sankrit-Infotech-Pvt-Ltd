import React, { useState } from 'react'
import envelop from '../assets/envelope.svg'
import call from '../assets/phone-call.svg'
import location from '../assets/map.svg'
import axios from 'axios'
import Validation from '../util/FormValidation'

function contact() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))
    if (errors.name === "" && errors.email === "" && errors.subject === "" && errors.message === "") {
      axios.post('http://localhost:8081/send', values)
        .then(res => {
          alert("Message Sent")
        })
        .catch(err => {
          alert("Message Sent Fail")
          console.log(err);
        });
    }
  }


  return (
    <div className='bg-[#14232e] text-black'>
      <div name='contact' className='flex justify-center items-center flex-col rounded-3xl mx-4  pb-20'>
        <h1 className='text-5xl md:text-7xl py-10 font-bold w-full md:px-32 text-white mt-20'>Get In Touch</h1>
        {/* Address */}
        <div className='flex bg-white md:justify-between justify-center md:w-[70%] flex-col md:flex-row-reverse items-center'>
          <div className='flex text-white justify-center items-left flex-col gap-10 bg-[#103f6e] md:w-[40%] md:px-8 md:p-16 w-full'>
            <div className='flex h-32 rounded-3xl justify-start items-center gap-5 p-5'>
              <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg' >
                <img src={call} alt="Icon" />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='font-semibold text-xl'>Phone Number</div>
                <div className='font-light'>+91 9430355900</div>
                <div className='font-light'>+91 9835370848</div>
              </div>
            </div>
            <div className='flex h-32 rounded-3xl justify-start items-center gap-5 p-5'>
              <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg'>
                <img src={envelop} alt="Icon" />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='font-semibold text-xl'>Email Address</div>
                <div className='font-light'>info@sankritinfotech.co.in</div>
                <div className='font-light'>sankritinfotech@gmail.com</div>
              </div>
            </div>
            <div className='flex h-32  rounded-3xl justify-start items-center gap-5 p-5'>
              <div className='border-2 border-dotted border-blue-500 rounded-full w-10 h-10 flex justify-center items-center shadow-lg'>
                <img src={location} alt="Icon" />
              </div>
              <div>
                <div className='font-semibold text-xl'>Loaction</div>
                <div className='font-light'>B-2589, Sector-II,</div>
                <div className='font-light'>HEC Township, Dhurwa,</div>
                <div className='font-light'>Ranchi-834004</div>
              </div>
            </div>
          </div>

          <div className='text-black md:w-[60%] md:px-20 py-10 h-full rounded-3xl px-10'>
            <div className='w-full pb-10 text-[#103f6e] text-2xl font-semibold'>Send us a Message</div>
            <form method='POST' onSubmit={handleSubmit} className='flex justify-center items-center flex-col gap-16'>

              <div className='flex justify-between w-full flex-wrap md:flex-nowrap items-center gap-10'>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input name='name' id='name' onChange={handleInput} placeholder="Full Name" type='text' className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                  <div className='text-red-700 text-sm font-light'>
                    {errors.name && <span>{errors.name}</span>}
                  </div>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input name='email' id='email' onChange={handleInput} placeholder="Email" type='email' className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                  <div className='text-red-700 text-sm font-light'>
                    {errors.email && <span>{errors.email}</span>}
                  </div>

                </div>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input name='subject' id='subject' onChange={handleInput} placeholder="Subject" type='text' className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Subject
                </label>
                <div className='text-red-700 text-sm font-light'>
                  {errors.subject && <span>{errors.subject}</span>}
                </div>

              </div>

              <div className="relative h-129 w-full min-w-[200px]">
                <textarea name="message" id='message' onChange={handleInput} rows="4" placeholder='Message' className="w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 "></textarea>
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Message
                </label>
                <div className='text-red-700 text-sm font-light'>
                  {errors.message && <span>{errors.message}</span>}
                </div>

              </div>
              <button className='border-2 w-full rounded-xl p-3 text-blue-600 hover:text-white hover:bg-blue-500 duration-500' type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className='flex justify-center items-center flex-col py-10'>
          <h1 className='text-5xl font-semibold pb-10 text-white'>Find Us On Google Map</h1>
          <div className='w-full'>
            <iframe className='w-full px-5 md:px-0 md:w-[930px]' height={400} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6630.812909333805!2d85.304948!3d23.328694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e030957f7b27%3A0x8b9d4d65c44f6a5c!2sSankrit%20Infotech%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1718904300189!5m2!1sen!2sin" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
