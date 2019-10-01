import React from 'react'
import Anecdote from './Anecdote'
import {vote} from '../reducers/anecdoteReducer'

const Anecdotes = ( {store} ) => {
    return(
        <div>
            {console.log('Anecdotes', store.getState())}
            {store.getState().map(anecdote =>
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