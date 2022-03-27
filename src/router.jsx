import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Success from './pages/Success'
import Home from './pages/Home'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/success" element={<Success />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default Router
