import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'


const Filter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h4>Search</h4>
            <div>
              <input onChange={({ target }) => dispatch(filterChange(target.value))} />
            </div>
        </div>
    )
}
export default Filter