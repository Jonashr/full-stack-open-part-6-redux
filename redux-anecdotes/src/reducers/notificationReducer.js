
const initialState =  {
        message: 'Initial message'
}


const notificationReducer = (state = initialState, action) => {
    console.log("NOtification reducer: State, action", state, action)
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return action.notification       
        default:
            return state
    }
}

export const changeNotification = (notification) => {
    console.log("Change notificaiton")
    // console.log("Change notification", notification)
    return {
        type:'SET_NOTIFICATION',
        notification: {
            message: notification
        }
    }
}

export const removeNotification = () => {
    console.log("Remove notification")
    return { 
        type: 'REMOVE_NOTIFICATION',
        notification: {
            message: ''
        }
    }
}



export default notificationReducer