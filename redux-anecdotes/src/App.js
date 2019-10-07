import React from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  const store = props.store
  console.log('Store in app', store)

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification  />
      <AnecdoteList  />
      <AnecdoteForm  />
    </div>
  )
}

export default App