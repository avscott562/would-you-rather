import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/dashboard' activeClassName='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
                </li>
                <li>
                    <NavLink to='/' exact activeClassName='active'>Log Out</NavLink>
                </li>
            </ul>
        </nav>
    )
}