import React from 'react';
import CardCharacter from './CardCharacter';

const Characters = ({state, setState, party, setParty,setDeleteItem, loading, error}) => {

    if(loading) return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    if(error) return <p>Error : {error.message}</p>
    if(state.length < 1) return <h1 style={{textAlign: 'center'}}>Not results</h1>

    return (
        <div className='characters'>
            {state.map(item =>
                <CardCharacter
                    key={item.id}
                    item={item}
                    party={party}
                    setState={setState}
                    setDeleteItem={setDeleteItem}
                    setParty={setParty}
                />
            )}
        </div>
    );
};

export default Characters;