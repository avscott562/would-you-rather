import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'
import { removeCurrentUser } from '../actions/authedUser'

class Nav extends Component {

    handleLogOut = (e) => {
        const { dispatch } = this.props
        dispatch(removeCurrentUser())
    }
    
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/dashboard' activeClassName='active' className='nav-option'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active' className='nav-option'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active' className='nav-option'>Leader Board</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' 
                          exact 
                          activeClassName='active' 
                          className='nav-option'
                          onClick={this.handleLogOut}
                          >Log Out</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
    
}

export default connect()(Nav)