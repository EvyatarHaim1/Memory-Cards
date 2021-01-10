

const currentBoardReducer = (state = [], action) => {
    switch(action.type){
        case 'FINISHED_GAME':
            return state + 16;
        case 'IS-MATCH':
            return state + 2;
        case 'NO_MATCH':
            return state;
        default:
            return state;
    }
}

export default currentBoardReducer;