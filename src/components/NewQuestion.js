import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import 'materialize-css';
import '../css/newQuestion.css'

class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
        toHome: false
    }

    handleChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
      e.preventDefault()

      const { optionOne, optionTwo } = this.state

      const { dispatch } = this.props

      dispatch(handleAddQuestion(optionOne, optionTwo))

      this.setState(() => ({
        optionOne: '',
        optionTwo: '',
        toHome: true
      }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/' />
      }

        const textLeftOne = 100 -optionOne.length
        const textLeftTwo = 100 -optionTwo.length

        return (
            <div>
                <h1>Create a New Poll!</h1>
                <h3>Would You Rather...</h3>
                <form action="" className="new-question">
                    <textarea
                      placeholder={`First Choice...`}
                      name='optionOne'
                      value={optionOne}
                      onChange={this.handleChange}
                      className='textarea'
                      maxLength={100}
                    />

                    {textLeftOne > 50 
                      ? <div className='max-length'>Maximum 100 characters.</div>
                      : <div className='text-length'>{textLeftOne} characters left.</div>}
                
                    <p>--- OR ---</p>

                    <textarea
                      placeholder={`Second Choice...`}
                      name='optionTwo'
                      value={optionTwo}
                      onChange={this.handleChange}
                      className='textarea'
                      maxLength={100}
                    />

                    {textLeftTwo > 50 
                      ? <div className='max-length'>Maximum 100 characters.</div>
                      : <div className='text-length'>{textLeftTwo} characters left.</div>}

                    <br />

                    <button 
                      className='btn'
                      type='submit'
                      disabled={(optionOne === '') || (optionTwo === '')}
                      onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion)