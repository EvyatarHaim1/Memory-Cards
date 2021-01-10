import React, {useState, useEffect} from 'react';
import Board from './Board';
import initializeDeck from '../../deck';
import match from '../../assets/audio/match.mp3';
import unmatch from '../../assets/audio/unmatch.mp3';
import lose from '../../assets/audio/you_lose.mp3';
import win from '../../assets/audio/you_win.mp3';
import {Howl, Howler} from 'howler'

export default function DefaultPack() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] =useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  },[])

  useEffect(() => {
    preloadImages()
  }, [cards])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const soundPlay = (src) => {
    const sound = new Howl({src})
    sound.play();
  }

  Howler.volume(1.2)

  const preloadImages = () => {
    console.log(cards.length)
    cards.map((card) => {
      const src = `/img/${card.type}.jpg`
      new Image().src = src
    })
  }

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return 
      setFlipped([flipped[0],id])
      if (isMatch(id)){
        setSolved([...solved, flipped[0], id])
        soundPlay(match)
        resetCards()
      } else {
        setTimeout(resetCards, 1500)
        soundPlay(unmatch)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked =(id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      ),
      )
  }


  return (
    <div className="App">
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}/>
    </div>
  );
}


