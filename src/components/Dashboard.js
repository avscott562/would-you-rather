import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { user, answeredIds, unansweredIds  } = this.props

        return (
            <div>
                <h1>{`${user.name}'s Dashboard`}</h1>
                <Tabs className="z-depth-1">
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
    const user = users[authedUser]
    const questionIds = Object.keys(questions)
    const answeredIds = Object.keys(user.answers)
    const unansweredIds = questionIds.filter(id => !answeredIds.includes(id))

    return {
        user,
        answeredIds,
        unansweredIds
    }
}

// export default connect()(Dashboard)
export default connect(mapStateToProps)(Dashboard)
