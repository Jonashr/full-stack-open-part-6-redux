import React from 'react'
import Anecdote from './Anecdote'
import {connect} from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    return(
        <div>
            {props.visibleAnecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.vote(anecdote.id, anecdote);
                        props.changeNotification(`You voted for ${anecdote.content}`);
                        setTimeout(() =>  
                        props.removeNotification(), 5000);
                    }}
                />
          )}
        </div>
        
    )

}

const mapDispatchToProps = {
    vote, changeNotification, removeNotification,
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