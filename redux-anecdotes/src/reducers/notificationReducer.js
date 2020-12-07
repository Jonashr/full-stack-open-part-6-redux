const initialState =  {
        message: ''
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return action.notification       
        default:
            return state
    }
}

export const setNotification = (notification, milliseconds = 5000) => {
    return async dispatch => {
        await dispatch({
            type: 'SET_NOTIFICATION',
            notification: {
                message: notification
            }
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION',
                notification: {
                    message: ''
                }
            })
          }, milliseconds)
    }
}

export default notificationReducer