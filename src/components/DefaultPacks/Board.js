import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from './Card';

export default function Board({
    disabled,
    dimension,
    cards, 
    flipped, 
    solved,
    handleClick
    }) {
  return(
      <div style={{paddingTop:"100px"}}>
        {cards.map((card) => (
          <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension /4.5}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
          />
        ))}
        
      </div>
  )
}
Board.prototypes = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}


