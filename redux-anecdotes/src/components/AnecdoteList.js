import React from 'react'
import Anecdote from './Anecdote'
import {vote} from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( {store} ) => {
    const sortedList = store.getState().anecdotes.sort((a, b) => a.votes - b.votes).reverse()
    const filter = store.getState().filter

    const anecdotesToBeDisplayed = () => {
        console.log(filter)
        if(filter === 'ALL') {
            return sortedList
        } else {
            return sortedList.filter(anecdote => anecdote.content.includes(filter))
        }
    }

    console.log(anecdotesToBeDisplayed())

    return(
        <div>
            {anecdotesToBeDisplayed().map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => 
                        store.dispatch(vote(anecdote.id),
                        store.dispatch(changeNotification(`You voted for ${anecdote.content}`)),
                        setTimeout(() =>  
                            store.dispatch(removeNotification()), 5000)
                        )
                    }
                />
          )}
        </div>
        
    )
}

export default AnecdoteList