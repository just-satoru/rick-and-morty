import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';

const Party = (props) => {

    return (
        <div className='party'>
            <Typography variant="h2" component="h2">PARTY</Typography>
            <div className='party__characters'>
                {Object.keys(props.party).map((item, index)=> (
                    <div className='party__img' key={index}>
                        <img alt={props.item} src={props.party[item]} />
                        <Typography
                            variant="h2"
                            component="h2"
                            color='white'
                            fontSize='50px'
                        >
                            {item.toUpperCase()}
                        </Typography>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default Party;