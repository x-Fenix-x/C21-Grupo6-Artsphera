import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export const SideBar = () => {
    const { pathname } = useLocation;

    useEffect(() => {
        const fireAnimation = anime({
            targets: '.fireAnimation',
            keyframes: [
                { opacity: 0 },
                { opacity: 1 },
                { opacity: 0.8 },
                { opacity: 1 }
            ],
            easing: 'easeInOutQuad',
            loop: true,
            duration: 2000
        });

        const artesphera = document.getElementById('artesphera');

        artesphera.addEventListener('mouseenter', () => {
            fireAnimation.pause();
        });

        artesphera.addEventListener('mouseleave', () => {
            fireAnimation.play();
        });

        return () => {
            artesphera.removeEventListener('mouseenter', () => {
                fireAnimation.pause();
            });

            artesphera.removeEventListener('mouseleave', () => {
                fireAnimation.play();
            });
        };
    }, []); 


    return (
        <ul
            className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
            id='accordionSidebar'
        >
            <Link
                className='sidebar-brand d-flex align-items-center justify-content-center'
                to='/'
            >
                <div className='sidebar-brand-icon'>
                    <div id="artesphera" className="fireAnimation">Artesphera</div>
                </div>
            </Link>

            <hr className='sidebar-divider my-0' />

            <li className='nav-item active'>
                <a className='nav-link' href='/'>
                    <i className='fas fa-fw fa-tachometer-alt'></i>
                    <span>Dashboard - Artesphera</span>
                </a>
            </li>

            <hr className='sidebar-divider' />

            <div className='sidebar-heading'>Actions</div>

            <li className={`nav-item ${pathname === '/' && 'active'}`}>
                <Link className='nav-link collapsed' to='/'>
                    <i className='fas fa-fw fa-home'></i>
                    <span>INICIO</span>
                </Link>
            </li>

            <li className={`nav-item ${pathname === '/products' && 'active'}`}>
                <Link className='nav-link' to='/products'>
                    <i className='fas fa-fw fa-film'></i>
                    <span>PRODUCTOS</span>
                </Link>
            </li>

            <li className={`nav-item ${pathname === '/users' && 'active'}`}>
                <Link className='nav-link' to='/users'>
                    <i className='fas fa-fw fa-table'></i>
                    <span>USUARIOS</span>
                </Link>
            </li>

            <hr className='sidebar-divider d-none d-md-block' />
        </ul>
    );
    
};
