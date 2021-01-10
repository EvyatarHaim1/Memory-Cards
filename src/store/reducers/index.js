import currentBoard from './currentBoard';
import isLogged from './isLogged';
import customBoards from './customBoards';
import buildNewBoard from './buildNewBoard'
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    currentBoard: currentBoard,
    isLogged: isLogged,
    customBoards: customBoards,
    buildNewBoard: buildNewBoard
})

export default allReducers;
