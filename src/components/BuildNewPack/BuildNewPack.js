import React,{useState} from 'react';
import {Input, Button, Container} from '@material-ui/core/';
import styled from 'styled-components';
import NewPackViewLoader from './NewPackViewLoader';
import {useSelector, useDispatch} from 'react-redux';
import {buildNewBoard} from '../../store/actions/index'

 const BuildNewPack = () => {
  
       const [Board,setBoard] = useState([]);
       const newBoard = useSelector(state => state.buildNewBoard);
       const isLogged = useSelector(state => state.isLogged);
       const dispatch = useDispatch

   const handleInput = (e) => {
        console.log(e.target.files[0])
       console.log(e.target.name)
       setBoard([...Board, e.target.files[0]] )
   }
    
        return (
            <DIV>
               <H1>LOAD 8 IMAGES AND CREATE YOUR OWN BOARD </H1>
               <BUTTON onClick={()=> dispatch(buildNewBoard())}> BUILD YOUR BOARD</BUTTON>
               <NEWPACKVIEWLOADER images={Board} />
            <ImagesContainer>
              <INPUT type="file" 
                      name="one" 
                      onChange={(e)=> handleInput(e)}>
              </INPUT>
              <INPUT type="file" 
                      name="two" 
                      value=''
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="three"
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="four" 
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="five" 
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="six" 
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="seven" 
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
               <INPUT type="file" 
                      name="eight" 
                      onChange={(e)=> handleInput(e)}>
               </INPUT>
            </ImagesContainer>
            </DIV>
        )
    }
    export default BuildNewPack;
    
    const H1 = styled.h1` margin-top: 70px;`

    const ImagesContainer = styled.div`
    display: grid;
    margin-top: 20px;
    grid-template-rows: repeat(8,1fr);`
    
    const INPUT = styled(Input)`width: 200px; margin-left: 100px; height: 50px;`

    const NEWPACKVIEWLOADER = styled(NewPackViewLoader)`padding: 50px;`
    const BUTTON = styled(Button)`background-color:#808080; `

    const DIV = styled.div`background-color:#d8ab4e; height: 550px;`

