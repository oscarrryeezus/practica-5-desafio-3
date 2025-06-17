import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const Layout = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header style={{
                padding: '10px',
                backgroundColor: '#f13710',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    
                    <h1 style={{ margin: 0, fontSize: '1.2rem' }}>Mi Sitio</h1>
                </div>

                

                <nav>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '15px' }}>
                        <FaHome style={{ marginRight: '5px' }} />
                        Home
                    </Link>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
                        <FaInfoCircle style={{ marginRight: '5px' }} />
                        Acerca de
                    </Link>
                </nav>
            </header>

            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>

            <footer style={{
                padding: '10px',
                backgroundColor: '#f13710',
                color: '#fff',
                textAlign: 'center'
            }}>
                <p>Derechos Reservados© 2025</p>
            </footer>
        </div>
    );
};

export default Layout;
