
const initialState = 
    {
        message: 'Initial message'
    }


const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const changeNotification = notification => {
    return {
        type:'SET_NOTIFICATION',
        notification
    }
}

export default notificationReducer