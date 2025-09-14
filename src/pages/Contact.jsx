import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const[formData, setFormData] = useState({
    name:"",
    email:"",
    number:"",
    feedback:""
  });

  const handleChange=(e) =>{
    let {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  let handleSubmit = (e) =>{
    e.preventDefault()
    toast.success("Thanks for sharing your feedback 🌸" ,{duration:2000,})

    console.log("form submitted");
    

    setFormData({
      name:"",
      email:"",
      number:"",
      feedback:""
    })

  }

  return (
  <div className="min-h-svh px-6 py-12">
  <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
    Contact Me
  </h1>

  {/* Contact Info Section */}
  <div className="flex flex-col md:flex-row justify-around items-center gap-6 mb-12">
    <div className="border bg-gray-100 shadow-md h-16 w-full md:w-96 flex items-center px-4 rounded-2xl">
      <span className="font-semibold mr-2">📞 Phone:</span> 9927906569
    </div>
    <div className="border bg-gray-100 shadow-md h-16 w-full md:w-96 flex items-center px-4 rounded-2xl">
      <span className="font-semibold mr-2">📧 Email:</span> pundirkashish972@gmail.com
    </div>
    <div className="border bg-gray-100 shadow-md h-16 w-full md:w-96 flex items-center px-4 rounded-2xl">
      <span className="font-semibold mr-2">📷 Instagram:</span> kashishpundir08
    </div>
  </div>

  {/* Feedback Form */}
 <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-6 ">
    Send Me Feedback
  </h2>
  
  <form onSubmit={handleSubmit} className="flex flex-col gap-5 "
  >
    {/* First Row: Name, Number, Email */}
    <div className="flex flex-col  md:flex-row gap-4 ">
      <input 
        name='name'
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="flex-1 md:w-1/3 p-3 bg-gray-100  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name='number'
        type="tel"
        value={formData.number}
        onChange={handleChange}
        placeholder="Your Number"
        className="flex-1 md:w-1/3 p-3 bg-gray-100  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name='email'
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="flex-1 md:w-1/3 p-3 bg-gray-100  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Message Field */}
    <textarea
      name='feedback'
      value={formData.feedback}
      onChange={handleChange}
      placeholder="Your Message"
      rows="6"
      className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Button */}
    <button 
      type="submit"
      className="self-start bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
    >
      Send Feedback
    </button>
  </form>
</div>
</div>
  )
}

export default Contact