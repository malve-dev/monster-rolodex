import React from 'react';
import './cardList.styles.css'
import {Card} from '../card/Card';

export const CardList = (props) => {

    return(
        <div className = 'cardlist'>
            {props.monsters.map(monster => <Card key = {monster.id} monster = {monster}></Card>)}  
        </div>
    );

}