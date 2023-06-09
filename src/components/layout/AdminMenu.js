import React from 'react'
import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
   <div className="list-group">
    <NavLink to="/dashboard/admin/" className="list-group-item list-group-item-action">Admin Panel</NavLink>
      <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
      <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
      <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
    </div>


    </>
  )
}
