import s from './Statistics.module.css'
import Section from '../Section'
import { Component } from 'react'

class Statistics extends Component {
    render(){
        const {good, neutral, bad} = this.props
        return (
            <Section title={'Statistics'}>
                <p>Good <span> {good}</span></p>
                <p>Neutral <span> {neutral}</span></p>
                <p>Bad <span> {bad}</span></p>
                <p>Total <span> {bad + neutral + good} </span></p>

            </Section>
        )
    }
}

export default Statistics