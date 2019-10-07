import React from 'react'
import {connect} from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('CONTENT', content)
        console.log('props.store', props)
        props.createAnecdote(content)
        props.changeNotification(`You added new anecdote: ${content} `)
        setTimeout(() => props.removeNotification(), 5000)
        event.target.anecdote.value = ''
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name='anecdote'/>
                    <button type='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('Log state ', state)

    return {
        anecdotes: state.anecdotes,
        notification: state.notification,
    }
}

const mapDispatchToProps = { 
    createAnecdote,
    changeNotification,
    removeNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)