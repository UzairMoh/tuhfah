﻿import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import '../../App.css'

const Layout: FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;