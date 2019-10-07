import React from 'react'
import {connect} from 'react-redux'
import { filterChange } from '../reducers/filterReducer'


const Filter = (props) => {
    console.log("Filter", props)
    const handleChange = (event) => {
        props.filterChange(event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = {
    filterChange
}
const mapStateToProps = (state) => {
    console.log('Filter state', state)
    return {
      filter: state.filter,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)