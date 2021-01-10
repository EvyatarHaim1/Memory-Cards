const customBoards = (state= [], action) => {
    switch(action.type){
        case 'ADDING_NEW_BOARD':
            return state + 1;
        case 'DELETEING_BOARD':
            return state -1;
        case 'UPDATE_BOARD':
            return state;
        default: 
            return state;
    }
}

export default customBoards;