import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPage from './QuestionPage'

class ErrorPage extends Component {
    render() {
        const { authedUser } = this.props

        return (
            <div>
                {authedUser === null || authedUser === undefined
                ? <div>
                    <p>Please log in to see polls.</p>
                    <button>OK</button>
                </div>
                : <div><QuestionPage props={this.props} /></div>}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(ErrorPage)