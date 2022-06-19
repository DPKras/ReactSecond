import React from 'react';
import { Link } from 'react-router-dom'
function Main() {

    return (
        <>
        <div style={{width: '100%', backgroundColor: '#E6E6FA', display:'flex', flexDirection: 'column', gap: '1rem', padding:'2rem'}}>
          <span style={{color:'black', fontSize: '50px'}}>Ре́мбрандт Ха́рменс ван Рейн</span> 
          <Link style={{textDecoration: 'none', color:'DarkRed', fontSize: '40px'}} to='/biography'>Биография художника</Link>
          <Link style={{textDecoration: 'none', color:'DarkRed', fontSize: '40px'}} to='/picture'>Самая известная картина</Link>
          <Link style={{textDecoration: 'none', color:'DarkRed', fontSize: '40px'}} to='/gallery'>Картины художника</Link>
        </div>
        </>
        );

}

export default Main;