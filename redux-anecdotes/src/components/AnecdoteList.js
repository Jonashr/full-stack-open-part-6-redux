import React from 'react'
import Anecdote from './Anecdote'
import {connect} from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    return(
        <div>
            {props.visibleAnecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.vote(anecdote.id, anecdote);
                        props.setNotification(`You voted for ${anecdote.content}`, 5000);
                    }}
                />
          )}
        </div>
        
    )

}

const mapDispatchToProps = {
    vote, setNotification
}

const anecdotesToBeDisplayed = ({anecdotes, filter}) => {
    if(filter === 'ALL') {
        return anecdotes.sort((a, b) => a.votes - b.votes).reverse()
    } else {
        return anecdotes.filter(anecdote => anecdote.content.includes(filter)).sort((a, b) => a.votes - b.votes).reverse()
    }
}

const mapStateToProps = (state) => {
    console.log('Log state map to props', state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
      notification: state.notification,
      visibleAnecdotes: anecdotesToBeDisplayed(state)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)