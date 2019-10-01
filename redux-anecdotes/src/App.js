import React from 'react';
import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'

const App = (props) => {

  const vote = (id) => {
    console.log('vote', id)
  }

  console.log('Props.store', props.store.getState())

  return (
    <div>
      <Anecdotes store={props.store} />
      <NewAnecdote store={props.store} />
    </div>
  )
}

export default App