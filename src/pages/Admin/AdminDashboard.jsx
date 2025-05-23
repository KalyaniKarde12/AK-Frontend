import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
const AdminDashboard = () => {

  const [auth]=useAuth()
  return (
    <Layout>
   <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
      </div>
      <div className="col-md-9">
       <h1>Admin name:{auth?.user?.name}</h1>
       <h1>Admin email:{auth?.user?.email}</h1>
       <h1>Admin Contact:{auth?.user?.phone}</h1>
      </div>
    </div>
   </div>
   </Layout>
  )
}

export default AdminDashboard