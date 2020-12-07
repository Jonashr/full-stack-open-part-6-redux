import React from 'react'
import { useSelector } from 'react-redux'


const Notification = (props) => {
  const notification = useSelector(state => state.notification)

  if(notification.message === '') {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

export default Notification