import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Success from './pages/Success'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </BrowserRouter>
)

export default Router
