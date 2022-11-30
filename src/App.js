import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './query/character';
import './App.css';
import Party from './Components/Party';
import Search from './Components/Search';
import Characters from './Components/Characters';


function App() {

  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [party, setParty] = useState({
    rick: '',
    morty: ''
  });
  const [deleteItem, setDeleteItem] = useState([]);


  const { data, loading, error } = useQuery(GET_CHARACTERS(input.length > 2 ? input : ''));


  useEffect(() => {
    if (!loading) {
      const newState = data.characters.results.filter(item => !deleteItem.includes(item.name));
      setState(newState);
    }
  }, [data, loading, deleteItem])

  return (
    <div className="App">
      <Search input={input} setInput={setInput} />
      <Characters
        state={state}
        setState={setState}
        party={party}
        setParty={setParty}
        setDeleteItem={setDeleteItem}
        loading={loading} error={error}
      />
      <Party party={party} />
    </div>
  );
}

export default App;
