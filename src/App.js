import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './query/character';
import './App.css';
import CardCharacter from './Components/CardCharacter';
import Party from './Components/Party';
import Search from './Components/Search';


function App() {

  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [party, setParty] = useState({
    rick: '',
    morty: ''
  });
  const [deleteItem, setDeleteItem] = useState([]);


  const { data, loading, error } = useQuery(GET_CHARACTERS(input.length > 2 ? input : ''), {
    pollInterval: 300,
  });


  useEffect(() => {
    if (!loading) {
      const newState = data.characters.results.filter(item => !deleteItem.includes(item.name));
      setState(newState);
    }
  }, [data])



  return (
    <div className="App">
      <Search input={input} setInput={setInput} />
      <div className='characters'>
        {state.map((item, index) =>
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
      <Party party={party} />
    </div>
  );
}

export default App;
