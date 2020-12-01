import React, { Component, Fragment } from 'react'
import { Link } from'react-router-dom'
import { connect } from 'react-redux'
import 'materialize-css';
import { Select, Button, Icon } from 'react-materialize';
import '../css/login.css'

class LogIn extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <h1 className="login-title">Would You Rather?</h1>
                </header>

                <div className='main-content'>
                    <section>
                        <img 
                            src="data:image/jpeg;base64,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" 
                            alt="welcome"
                            className="welcome-image"
                        />
                    </section>
                    <section className="logIn">
                        <h4 className='login-header'>Log in and join the fun !</h4>
                        <div className='login-info'>
                            <Select 
                              id="user-select"
                              multiple={false}
                              options={{
                                  closeOnClick: true
                              }}
                              value=''>
                                <option disabled value=''>Select a User</option>
                                <option value='1'>User 1</option>
                                <option value='2'>User 2</option>
                                <option value='3'>User 3</option>
                            </Select>
                        </div>
                        <Link to={'/dashboard'}>
                            <Button 
                            node="button"
                            type="submit">Log In!
                            <Icon right>send</Icon>
                            </Button>
                        </Link>
                        
                    </section>
                    
                </div>
            </Fragment>
        )
    }
}

export default connect()(LogIn)