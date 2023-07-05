import React, {useState, useEffect} from 'react';
import HomeCharacter from './HomeCharacter';

const Home = (props) => {
    const [characters, setCharacters] = useState([]);

    const searchCharacters = async () => {
        const temp = await fetch('http://localhost:4000/api/characters');
        const json = await temp.json();
        console.log(json)
        setCharacters(json)
    }

    useEffect(() => {
        searchCharacters();
    }, [])
    return (
        <>
        <h1>Star Wars Universe Lookup</h1>
        <h4>Who are you looking for?</h4>
        <hr/>
        {
            characters.map((char, index) => {
                return <HomeCharacter key={index} name={char.name} id={char.id} />
            })
        }
        </>
    )
}

export default Home;