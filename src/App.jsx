import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useNavigate as Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/user/Dashboard'
import Private from './components/Routes/Private'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminRoute from './components/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import User from './pages/Admin/User'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct/>} />
          <Route path='admin/users' element={<User/>} />
        </Route>
       {/* User routes */}
       <Route path='/dashboard' element={<Private />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/orders' element={<Orders />} />
          <Route path='user/profile' element={<Profile/>} />

        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>

  )
}

export default App