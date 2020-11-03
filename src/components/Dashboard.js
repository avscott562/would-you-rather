import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionPage from './QuestionPage'
// import { AppBar, Tabs, Tab, TabPanel } from '@material-ui/core';
import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';

class Dashboard extends Component {
    render() {
        return (
            <div>
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
                          <h2>Unanswered Questions</h2>
                          <QuestionPage />
                    </Tab>
                    <Tab 
                    options={{
                        duration: 300,
                        onShow: null,   
                        responsiveThreshold: Infinity,
                        swipeable: false
                      }}
                      title="Answered">
                          <h2>Answered Questions</h2>
                          <QuestionPage />
                          <QuestionPage />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

// export default connect()(Dashboard)
export default Dashboard
