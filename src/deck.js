import chosenPack from './components/DefaultPacks/DefaultPacks';

function shuffle(array){
    const _array = array.slice(0)
    for(let i = 0; i < array.length -1; i++){
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
     return _array
}

export default function initializeDeck(){
    let id = 0;
    const cards= [chosenPack[0],chosenPack[1], chosenPack[2], chosenPack[3],chosenPack[4],
     chosenPack[5], chosenPack[6], chosenPack[7] ].reduce((acc,type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}