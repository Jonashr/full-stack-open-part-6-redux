import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('CONTENT', content)
        console.log('props.store', props.store)
        event.target.anecdote.value = ''
        props.store.dispatch(
            createAnecdote(content)
        )
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