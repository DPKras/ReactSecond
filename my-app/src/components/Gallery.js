import React from 'react';
import { Link } from 'react-router-dom'
import Pic1 from './1.jpg';
import Pic2 from './2.jpg';
import Pic3 from './3.jpg';
import Pic4 from './4.jpg';


function Gallery() {

    return (
        <>
         <Link style={{color:'DarkRed', fontSize: '35px', margin: '25px'}} to='/'>На главную</Link>
        <div className='bio'>
            <h1 style={{fontSize:"40px"}}>Картины художника</h1>
            <div style={{display:'flex', flexWrap: 'wrap', gap: '40px'}}>
                <img style={{width: '32%'}} src={Pic1} alt={'pic'}/>
                <img style={{width: '32%'}} src={Pic2} alt={'pic'}/>
                <img style={{width: '32%'}} src={Pic3} alt={'pic'}/>
                <img style={{width: '100%'}} src={Pic4} alt={'pic'}/>
            </div>
        </div>
        </>
        );

        

}

export default Gallery;