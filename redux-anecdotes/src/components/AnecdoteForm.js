import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification, setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        event.target.anecdote.value = ''
        dispatch(setNotification(`You added a new anecdote: ${content}`))
        // setTimeout(() => dispatch(removeNotification(), 5000))
    }

    return(
        <div>
            <h2>Create New Anecdote</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name='anecdote'/>
                    <button type='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

export default AnecdoteForm