import './App.css'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <main className='h-screen w-full'>
      <Navbar/>
      <Outlet/>
      <Toaster/> 

    </main>
  )
}

export default App;
