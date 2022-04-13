import './App.css';
import { useState } from 'react';
import SearchResult from './components/SearchResult';

function App() {
  const [search, setSearch] = useState('')
  const [names, setNames] = useState([])  
  const [links, setLinks] = useState([])  

  const handleSearch = async () => {
    try {
      const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${search}`
      const response = await fetch(url)
      const jsonRes = await response.json()
  
      setNames(jsonRes[1])
      setLinks(jsonRes[3])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='box-wrapper'>
      <div className='box'>
        <h3>Wiki Viewer</h3>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>

        {names.map((v, i) => (
          <SearchResult key={i + v} name={v} link={links[i]} />
        ))}
      </div>
    </div>
  );
}

export default App;
