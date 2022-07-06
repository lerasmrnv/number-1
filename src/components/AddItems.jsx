import React from 'react';


const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input className='input'
                autoFocus
                type='text'
                placeholder='добавить комментарий'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button className='button' type='submit'>Отправить</button>

        </form>
    )
}

export default AddItems;
