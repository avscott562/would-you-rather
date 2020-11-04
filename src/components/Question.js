import React, { Component } from 'react'
import { Link, withRouter } from'react-router-dom'
import { connect } from 'react-redux'
import '../css/question.css'
import 'materialize-css';

class Question extends Component {
    render() {
        return (
            <div className="question">
                <p className="question-header">Jane Doe asks:</p>
                <div className="question-body">
                    <section className="img-section"><img src="https://via.placeholder.com/150" alt=""/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <p className="options">First Choice to pick from.</p>
                    </section>
                   <Link to={`/questions/:id`}><button className='btn' type='submit'>See more...</button></Link>
                </div>
            </div>
        )
    }
}

// export default connect()(Question)
export default Question