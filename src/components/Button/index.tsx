import React, { useState,ChangeEvent } from 'react';

interface NewitemsProps{
    addItem(item:string):void;
}



const Button:React.FC<NewitemsProps> = ({addItem}) =>{

    const [item,setItem]=useState('');

    const handleOnChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setItem(event.target.value);
    }

    const handleOnClick = () => {
        addItem(item);
        setItem('');
    }
 return (
    <div>
    <input onChange={handleOnChange} value={item} type="text" placeholder="Enter a new item" className="form-control rounded-0"/>
      <button onClick={handleOnClick} className="btn btn-success mt-2 mx-auto d-block rounded-0">Add Items</button>
      <hr/>
      
</div>
 )
}

export default Button;