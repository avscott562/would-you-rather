import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'materialize-css';
import '../css/newQuestion.css'

class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }

    handleChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state

        const textLeftOne = 250 -optionOne.length
        const textLeftTwo = 250 -optionTwo.length

        return (
            <div>
                <h1>Create a New Question</h1>
                <form action="" className="new-question">
                    <textarea
                      placeholder={`First Choice...`}
                      name='optionOne'
                      value={optionOne}
                      onChange={this.handleChange}
                      className='textarea'
                      maxLength={250}
                    />

                    {textLeftOne > 100 
                      ? <div className='max-length'>Maximum 250 characters.</div>
                      : <div className='text-length'>{textLeftOne} characters left.</div>}
                
                    <p>--- OR ---</p>

                    <textarea
                      placeholder={`Second Choice...`}
                      name='optionTwo'
                      value={optionTwo}
                      onChange={this.handleChange}
                      className='textarea'
                      maxLength={250}
                    />

                    {textLeftTwo > 100 
                      ? <div className='max-length'>Maximum 250 characters.</div>
                      : <div className='text-length'>{textLeftTwo} characters left.</div>}

                    <br />

                    <button 
                      className='btn'
                      type='submit'
                      disabled={(optionOne === '') || (optionTwo === '')}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

// export default connect()(NewQuestion)
export default NewQuestion