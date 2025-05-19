import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
const User = () => {
    return(
    <>
    <Layout>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
    </div>
    <h1>All User</h1>
    </div>
    </Layout>
    </>
    );
}

export default User