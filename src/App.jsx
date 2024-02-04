import { useState, useEffect } from 'react'
import './App.css'
import Character from './assets/components/Character'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const result = await response.json();
        setCharacters(result.results);
      } catch (error) {
        console.error('Error con la API:' + error.message)
      }
    }
    fetchCharacters();

  }, [])

  return (
    <>
      {characters.map((character) => <Character key={character.id} character={character} />)}
    </>
  )
}

export default App
