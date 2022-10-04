import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';

export const Header: FC = () => {
    return (
        <>
            <header className="menu">
                <NavLink className="link"
                    to={'/Main'}
                    style={({ isActive }) => ({
                        color: isActive ? 'green' : 'blue',
                    })}
                >
                    Main
                </NavLink>
                <NavLink className="link"
                    to={'/Profile'}
                    style={({ isActive }) => ({
                        color: isActive ? 'green' : 'blue',
                    })}
                >
                    Profile
                </NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};