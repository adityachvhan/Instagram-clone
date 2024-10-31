import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-l-slate-500 pl-7'>
                    <SideBar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/username' element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router
