import React from 'react'
import './AdminSidebar.css'
import {  NavLink } from 'react-router-dom'
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {

     
  return (
    <div className='admin-sidebar'>
       
        <div className="admin-sidebar-links">
             <NavLink to='/admin-dashboard'>Dashboard</NavLink>
        </div>

        <div className="admin-sidebar-links">
             <NavLink to='/pendingblogs'>Pending Blogs</NavLink>
        </div>
        <div className="admin-sidebar-links">
             <NavLink to='/approved-blogs-by-admin'>Approved Blogs</NavLink>
        </div>
         <div className="admin-sidebar-links">
             <NavLink to='/comment-section/admin'>Comments</NavLink>
        </div>
          <div className="admin-sidebar-links">
             <NavLink to='/activity-section/admin'>Activities</NavLink>
        </div>
          <div className="admin-sidebar--logout-link" onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/login')}}>
             <NavLink to='/login'><TbLogout2 /> Logout</NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
