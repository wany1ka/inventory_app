import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
    return (
        <nav className=''>
            <ul className='flex m-5 bg-gray-800 p-4 py-6 text-gray-200'>
                {role === 'admin' && (
                    <>
                        <li className='text-gray-200 hover:text-gray-500 mr-3'><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/inventory">Inventory</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/activity">Activity</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/sales">Sales</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/sales-trends">Trends</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/register">Register</Link></li>
                        <li className='hover:text-gray-500'><Link to="/messages">Messages</Link></li>
                    </>
                )}
                {role === 'manager' && (
                    <>
                        <li className='text-gray-200 hover:text-gray-500 mr-3'><Link to="/manager-dashboard">Manager Dashboard</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/inventory">Inventory</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/sales-trends">Trends</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/stock_report">Reports</Link></li>
                    </>
                )}
                {role === 'employee' && (
                    <>
                        <li className='text-gray-200 hover:text-gray-500 mr-3'><Link to="/employee-dashboard">Employee Dashboard</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/sales">Sales</Link></li>
                        <li className='hover:text-gray-500 mr-3'><Link to="/contact">Contact</Link></li>
                    </>
                )}
                {!role && (
                    <>
                        <h1>Welcome</h1>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;