import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdote from './Anecdote'
import {vote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const anecdotesToBeDisplayed = () => {
    if(filter === 'ALL') {
        return anecdotes.sort((a, b) => a.votes - b.votes).reverse()
    } else {
        return anecdotes.filter(anecdote => anecdote.content.includes(filter)).sort((a, b) => a.votes - b.votes).reverse()
    }
  }

  const filteredAnecdotes = anecdotesToBeDisplayed()

  return(
      <div style={{ marginTop: "20px" }}>
          {filteredAnecdotes.map(anecdote =>
              <Anecdote
                  key={anecdote.id}
                  anecdote={anecdote}
                  handleClick={() => {
                      dispatch(vote(anecdote.id, anecdote));
                      dispatch(setNotification(`You voted for ${anecdote.content}`, 5000));
                  }}
              />
        )}
      </div>
      
  )

}

export default AnecdoteList