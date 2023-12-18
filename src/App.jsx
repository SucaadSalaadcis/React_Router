import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/service' element={<Service/>} />
       <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default App

// Routes parent 
// Route holds specific route