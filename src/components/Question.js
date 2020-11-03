import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import 'materialize-css';

class Question extends Component {
    render() {
        return (
            <div className="question">
                <p className="question-header">Jane Doe asks:</p>
                <div className="question-body">
                    <section><img src="https://via.placeholder.com/150" alt=""/></section>
                    <section className="question-info">
                        <h5>Would You Rather...</h5>
                        <form className="options">
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span>First Choice to pick from.</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="Question 1 options" type="radio" />
                                    <span>Second Choice to pick from and let's see how this goes.</span>
                                </label>
                            </p>
                        </form>
                    </section>
                   <button className='btn' type='submit'>Submit</button>
                </div>
            </div>
        )
    }
}

// export default connect()(Question)
export default Question