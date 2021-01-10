import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

 const NewPackViewLoader = (props) => {
    const newBoard = useSelector(state => state.buildNewBoard);
  return (
      <Div>
          <img src={props.images} alt="1" />
      </Div>
  )
 }
 export default NewPackViewLoader;

//  const mapStateToProps = state => {
//     return {
//       newBoardCards : state.newBoardCards
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       updateNewBoard(newBoard){
//         dispatch({
//           type: "UPDATE_NEW_BOARD",
//           payload: newBoard
//         })
//       }
//     }
//   }
  




    const Div = styled.div`
    background-color: black;
    color: white;
    width: 850px;
    height: 500px;
    float: right;
    margin-right: 200px;
    `