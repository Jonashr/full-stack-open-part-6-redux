import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
        console.log('HELLO VOTING', action.data)
        const id = action.data.id
        const changedAnecdote = {
          ...action.data,
        }
        console.log('Changed anecdote..', changedAnecdote)
        console.log('CALLING VOTE', state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote))
        return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (id, anecdote) => {
  return async dispatch => {
    const updatedObject = {
      content: anecdote.content,
      votes: anecdote.votes + 1,
      id: anecdote.id
    }
    await anecdoteService.update(id, updatedObject)
    dispatch({
      type: 'VOTE',
      data: updatedObject
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })

    }
}


export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}


export default reducer