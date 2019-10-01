import React from 'react'
import Anecdote from './Anecdote'
import {vote} from '../reducers/anecdoteReducer'

const Anecdotes = ( {store} ) => {
    const sortedList = store.getState().sort((a, b) => a.votes - b.votes).reverse()
    return(
        <div>
            {sortedList.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => 
                        store.dispatch(vote(anecdote.id))
                    }
                />
          )}
        </div>
        
    )
}

export default Anecdotes