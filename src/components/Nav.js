import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/dashboard' activeClassName='active' className='nav-option'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active' className='nav-option'>New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active' className='nav-option'>Leader Board</NavLink>
                </li>
                <li>
                    <NavLink to='/' exact activeClassName='active' className='nav-option'>Log Out</NavLink>
                </li>
            </ul>
        </nav>
    )
}