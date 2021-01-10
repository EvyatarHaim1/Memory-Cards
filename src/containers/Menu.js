import React from 'react';
import { NavLink } from 'react-router-dom';
import gif1 from '../assets/images/gifs/animation.gif'
import gif2 from '../assets/images/gifs/animation2.gif';
import styled from 'styled-components';

const Menu = () => (
    <Div>
      <One><NavLink className="link" to='/defaultPacks'> <br/><br/><br/><br/>DEFAULT PACKS </NavLink></One>
      <Two><NavLink className="link" to='/customPacks'><br/><br/><br/><br/> CUSTOM PACKS </NavLink></Two>
    </Div>
);

export default Menu;

const Div = styled.div`
display: grid;
grid-template-rows: repeat(2,1fr);
align-content: center;
 border-top: 3px solid #c89666;
 width: 40%;
 height: 590px;
 margin:20px auto;
.link{   
   font-family: sans-serif; 
   vertical-align: middle;
   align-items: center;
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
    color: black;
    &.active {color: #75463F}
    &:hover {
    color: #3e4444;
  }};`

  const One = styled.div` background-image: url(${gif2});`
  const Two = styled.div` background-image: url(${gif1});`
