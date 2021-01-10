
const buildNewBoard = (state = [], action) => {
    switch(action.type){
        case 'BUILD_NEW_BOARD':
            return [...state, action.board];
        default:
            return state;
    }
}

export default buildNewBoard;