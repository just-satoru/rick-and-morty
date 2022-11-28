import React from 'react';
import { OutlinedInput } from '@mui/material';

const Search = (props) => {
    return (
        <div className='search'>
            <OutlinedInput
                value={props.input.toUpperCase()}
                type="text"
                onChange={(e) => props.setInput(e.target.value)}
            />
        </div>
    );
};

export default Search;