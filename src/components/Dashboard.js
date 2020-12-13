import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';
import '../css/dashboard.css'

class Dashboard extends Component {

    render() {
        console.log(this.props)
        const { 
            user: { name, answers, avatarURL }, 
            questionIds 
        } = this.props

        const answeredIds = Object.keys(answers)
        const answered = questionIds.filter(id => answeredIds.includes(id))
        const unanswered = questionIds.filter(id => !answeredIds.includes(id))

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
                          {unanswered.map(id => (
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
                          {answered.map(id => (
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
    return {
        user: users[authedUser],
        questionIds: Object.keys(questions)
          .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
