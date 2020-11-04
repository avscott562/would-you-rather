import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/profile.css'
import 'materialize-css';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
               <div className="user-photo">
                    <img className="user-photo" src="https://via.placeholder.com/150" alt="" />
               </div>
               <div className="user-bio">
                   <p className="user-name">Jane Doe</p>
                   <p className="user-asked">questions asked</p>
                   <p className="user-answered">questions answered</p>
               </div>
               <div className="user-score">
                   <p>Total Score</p>
                   <p>10</p>
               </div>
            </div>
        )
    }
}

// export default connect()(Question)
export default Profile