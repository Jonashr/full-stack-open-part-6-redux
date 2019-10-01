import React from 'react';
import Anecdotes from './components/Anecdotes'

const App = (props) => {
  const anecdotes = props.store.getState()

  const vote = (id) => {
    console.log('vote', id)
  }

  console.log('Props.store', props.store.getState())

  return (
    <div>
      <Anecdotes store={props.store} />
      <h2>create new</h2>
        <form>
        <div><input /></div>
        <button>create</button>
        </form>
    </div>
  )
}

export default App