import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css';
import { Tabs, Tab } from 'react-materialize';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <Tab title="Unanswered">Unanswered</Tab>
                    <Tab title="Answered">Answered</Tab>
                </Tabs>
            </div>
        )
    }
}

// export default connect()(Dashboard)
export default Dashboard
