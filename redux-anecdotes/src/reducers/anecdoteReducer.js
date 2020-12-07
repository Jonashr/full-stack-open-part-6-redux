import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
        const id = action.data.id
        const changedAnecdote = {
          ...action.data,
        }
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
      ...anecdote,
      votes: anecdote.votes + 1
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