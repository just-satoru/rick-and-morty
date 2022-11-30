import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CardCharacter = (props) => {

    const addToParty = () => {
        props.item.name.toLowerCase().split(' ').forEach((el) => {
            Object.keys(props.party).forEach(key => {
                if (el.includes(key)) {
                    props.setParty((prev) => {
                        return { ...prev, [`${key}`]: props.item.image }
                    })
                }
            })
        })
    }

    const deleteItem = () => {
        props.setState((prev) => prev.filter((el, i) => el.name !== props.item.name));
        props.setDeleteItem((prev) => [...prev, props.item.name]);
    }

    return (
        <div className='characters__item'>
            <div className='characters__delete' onClick={deleteItem} >
                <CloseIcon fontSize='small' />
            </div>
            <img
                alt={props.item.name}
                src={props.item.image}
                onClick={addToParty}
            />
        </div>
    );
};

export default CardCharacter;