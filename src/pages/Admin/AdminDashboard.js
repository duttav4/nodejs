import React from 'react'
import Layout from "../../components/layout/Layout";
import AdminMenu from '../../components/layout/AdminMenu';
import { useAuth } from "../../Context/authContext";

export default function AdminDashboard() {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <div className='card w-75 p-3'>
              <h1 className='text-transform-uppercase'>
                {auth?.user?.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
