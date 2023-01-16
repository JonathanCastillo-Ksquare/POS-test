import React from 'react'
import { Outlet } from 'react-router-dom';
export const Layout = () => {
    return (
        <div className="View">

            <main>
                <Outlet />

            </main>
        </div>
    )
}

export default Layout;