import React from 'react'
import Home from './pages/Home'
import Currency from './pages/Currency'
import { Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id' element={<Currency/>}></Route>
      <Route></Route>
      <Route></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App