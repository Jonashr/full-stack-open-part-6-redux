import React from 'react'
import Anecdote from './Anecdote'
import {connect} from 'react-redux'
import {vote} from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const sortedList = props.anecdotes.sort((a, b) => a.votes - b.votes).reverse()

    const anecdotesToBeDisplayed = () => {
        if(props.filter === 'ALL') {
            return sortedList
        } else {
            return sortedList.filter(anecdote => anecdote.content.includes(props.filter))
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
                        props.vote(anecdote.id,
                        props.changeNotification(`You voted for ${anecdote.content}`),
                        setTimeout(() =>  
                        props.removeNotification(), 5000))
                    }
                />
          )}
        </div>
        
    )

}
const mapDispatchToProps = {
    vote, changeNotification, removeNotification,
}

const mapStateToProps = (state) => {
    console.log('Log state map to props', state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
      notification: state.notification
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)