import React, { useState } from 'react'
import AddItems from './AddItems'



export default function Form() {
    const [items] = useState([{ comment: '' }]);

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newItem);
        console.log(items);

        setNewItem('');
    };

    const addItem = (item) => {

        const addedItem = { comment: item };
        items.unshift(addedItem)
    }

    const color = {
        color: 'blue'
    };

    return (
        <div className='container'>
            <h1 className='title'>Анонимные комментарии</h1>
            <AddItems
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <ul>

                {
                    items.map((item) =>
                        <p key={item.comment} style={color} >{item.comment} </p>
                    )
                }
            </ul>
        </div >
    )
}
