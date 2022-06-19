import React from 'react';
import { Link } from 'react-router-dom'
import NightWatch from './NightWatch.jpg';

function Picture() {

    return (
        <>
         <Link style={{color:'DarkRed', fontSize: '35px', margin: '25px'}} to='/'>На главную</Link>
        <div className='bio'>
            <p>«Ночно́й дозо́р» (нидерл. Nachtwacht) — название, под которым известна знаменитая картина Рембрандта «Выступление стрелковой роты капитана Франса Баннинга Кока и лейтенанта Виллема ван Рёйтенбюрга». 
                Картина написана в 1642 году. 
                Это одна из самых известных и самая большая (379,5 × 453,5 см) картина «золотого века» голландской живописи. 
                Экспонируется в отдельном зале Рейксмюсеума в Амстердаме.</p>
        <img style={{width: '50%', marginLeft:'25%'}} src={NightWatch} alt={'Ночной дозор'}/>
            </div> 
        </>
        );

        

}

export default Picture;