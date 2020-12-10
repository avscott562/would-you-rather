import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';
import '../css/dashboard.css'

class Dashboard extends Component {

    render() {
        console.log(this.props)
        const { user, questionIds } = this.props

        const { name, answers, avatarURL } = user

        const answeredIds = Object.keys(answers)
        const unansweredIds = questionIds.filter(id => !answeredIds.includes(id))

        return (
            <div>
                <div className="dashboard-header">
                    <img src={avatarURL} alt={`Avatar of ${name}`}/>
                    <h1>{`Hi ${name}!`}</h1>
                </div>

                <Tabs className="z-depth-1 dashboard-tab">
                    <Tab 
                      active
                      options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                      }}
                      title="Unanswered">
                          <h3>Unanswered Questions</h3>
                          {unansweredIds.map(id => (
                              <p key={id}>
                                  <Question id={id}/>
                              </p>
                          ))}
                    </Tab>
                    <Tab 
                    options={{
                        duration: 300,
                        onShow: null,   
                        responsiveThreshold: Infinity,
                        swipeable: false
                      }}
                      title="Answered">
                          <h3>Answered Questions</h3>
                          {answeredIds.map(id => (
                              <p key={id}>
                                  <Question id={id}/>
                              </p>
                          ))}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions, users }) {
    // console.log('users:  ', users)
    // console.log('authed user', authedUser)
    const user = users[authedUser]
    // console.log('user info', user)
    const questionIds = Object.keys(questions)

    return {
        user,
        questionIds
    }
}

export default connect(mapStateToProps)(Dashboard)
