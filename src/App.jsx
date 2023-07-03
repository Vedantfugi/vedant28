import React from 'react';
import Menu from './Menu.jsx';
import Subtop from './Subtop';
import Subbottom from './Subbottom';
import Subbottom2 from './Subbttom2';
import list from './list';
import item from './item';
import rest from './rest';

function App(){
    return (
        <>
        <Menu />
        <div className='courses'>
        <div className='Subtop'>
        {list.map((val)=>{
                return(
                    <Subtop 
                        img={val.img}
                        name={val.name}
                        course={val.course}
                    />
                );
            })}
        </div>  
        <div className='Subbottom'>
        {item.map((val)=>{
                return(
                    <Subbottom 
                        img={val.img}
                        name={val.name} 
                        course={val.course}
                    />
                );
            })}
        </div>  
        <div className='Subbottom2'>
        {rest.map((val)=>{
                return(
                    <Subbottom2 
                        img={val.img}
                        name={val.name}
                        course={val.course}
                    />
                );
            })}
        </div>  
        </div>
       
        </>
        
    );
}

export default App;