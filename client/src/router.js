import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Header from './components/Header';
import AddUser from './components/AddUser';
import Dashboard from './components/Dashboard';

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Header />} />
            <Route path="/addUser" element={<AddUser />} />
        </Routes>
    )
}

export default Routers