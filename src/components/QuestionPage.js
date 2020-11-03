import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'



class QuestionPage extends Component {
    render() {
        return (
            <div>
                <Question />
                <Question />
                <Question />
            </div>
        )
    }
}

// export default connect()(QuestionPage)
export default QuestionPage