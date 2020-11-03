import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css';
import { RadioGroup, Button } from 'react-materialize';

class Question extends Component {
    render() {
        return (
            <div className="question">
                <div className="question-header">Jane Doe asks:</div>
                <div className="question-body">
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <div className="question-info">
                            <h3>Would You Rather...</h3>
                            <RadioGroup 
                            options={[
                                {
                                    label: 'option 1',
                                    value: 'First Choice'
                                },    
                                {
                                    label: 'option 2',
                                    value: 'Second Choice'
                                }
                            ]}
                            />
                        </div>
                    </div>
                   <Button>Submit</Button>
                </div>
            </div>
        )
    }
}

// export default connect()(Question)
export default Question