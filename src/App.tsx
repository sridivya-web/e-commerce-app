
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer/Footer'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <>
      <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:category" element={<CategoryPage/>} />
        <Route path="/shop/:category/:slug" element={<SingleProduct/>} />
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
