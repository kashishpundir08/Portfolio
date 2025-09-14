import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Navbar (){

  //const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black p-4">
        <figure className="font-extrabold text-2xl">Kashish Pundir</figure>
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link to ={"/"}>Home</Link>
          </li>

          <li>
            <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to ="/project">Project</Link>
          </li>
          <li>
            <Link to ="/contact">Contact</Link>
          </li>
        </ul>
      
    </nav>
  )
}

export default Navbar