import React from 'react';
import { AnimalsPack } from '../DefaultPacks/packsImages';

const DefaultPacks = () => {

    const Animals = AnimalsPack
    return(
        <div> Defaults Packs:
           <span> Animals</span>
             {/* {Animals?.map((img, key) => {<div image={img} key={key}/> })} */}
           <div>Planets</div>
           <div>Countries</div>
        </div>
    )
}

export default DefaultPacks;