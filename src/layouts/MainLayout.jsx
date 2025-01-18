import { Outlet } from 'react-router-dom' //Whatever route you're on that page/content comes through the outlet
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer/>
    </>
  )
}

export default MainLayout