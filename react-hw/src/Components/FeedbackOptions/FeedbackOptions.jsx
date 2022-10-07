import s from './FeedbackOptions.module.css'
import Section from '../Section'
import { Component } from 'react'

class FeedbackOptions extends Component {
    
    render() {
        const {options, onLeaveFeedback} = this.props
        return (
            <Section title={'Please leave feedback'}> 
                {options.map(option => (
                    <button name={option} onClick={onLeaveFeedback}>{option}</button>
                ))}
            </Section>
    )}
}

export default FeedbackOptions