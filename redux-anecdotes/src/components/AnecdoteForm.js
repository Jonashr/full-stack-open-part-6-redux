import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = ({store}) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('CONTENT', content)
        console.log('props.store', store)
        event.target.anecdote.value = ''
        store.dispatch(
            createAnecdote(content))
        store.dispatch(changeNotification(`You added new anecdote: ${content} `))
            setTimeout(() =>  
                store.dispatch(removeNotification()), 5000)
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

export default AnecdoteForm