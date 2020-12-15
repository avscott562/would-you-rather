import React, { Component } from 'react'
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
                    <h1>{`Hi ${name}!`}</h1>
                    <img src={avatarURL} alt={`Avatar of ${name}`}/>
                </div>

                <Tabs className="z-depth-1 dashboard-tab">
                    <Tab 
                    options={{
                        duration: 300
                      }}
                      title="Answered Polls">
                          <p className='tab-header'>Nicely done!  See what your peers think.</p>
                          {answered.map(id => (
                              <p key={id} className="poll">
                                  <Question id={id}/>
                              </p>
                          ))}
                    </Tab>
                    <Tab 
                      active
                      options={{
                        duration: 300
                      }}
                      title="Unanswered Polls">
                          <p className='tab-header'>Check out the polls below.  Which would you rather?</p>
                          {unanswered.map(id => (
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
