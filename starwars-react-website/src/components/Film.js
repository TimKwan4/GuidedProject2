import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Film = ({ ...params }) => {
    const { id } = useParams();
    const [filmDetails, setFilmDetails] = useState({ title: undefined, release_date: undefined, director: undefined });
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const findFilm = async () => {
        const film = await fetch(`http://localhost:4000/api/films/${id}`);
        const details = await film.json();
        setFilmDetails(details[0]);
    }
    const findCharacters = async () => {
        const characterIds = await fetch(`http://localhost:4000/api/films/${id}/characters`);
        const charIdDetails = await characterIds.json();
        let characterDetails = [];
        for await (let char of charIdDetails) {
            const character = await fetch(`http://localhost:4000/api/characters/${char.character_id}`);
            const characterJson = await character.json();
            characterDetails.push(characterJson[0]);
        }
        setCharacters(characterDetails);
    }

    const findPlanets = async () => {
        const planetIds = await fetch(`http://localhost:4000/api/films/${id}/planets`);
        const planetIdDetails = await planetIds.json();
        let planetDetails = [];
        for await (let p of planetIdDetails) {
            const planet = await fetch(`http://localhost:4000/api/planets/${p.planet_id}`);
            const planetJSON = await planet.json();
            planetDetails.push(planetJSON[0]);
        }
        setPlanets(planetDetails);
    }

    useEffect(() => {
        findFilm();
        findCharacters();
        findPlanets();
    }, [])
    return (
        <>
            <h1>{filmDetails.title}</h1>
            <div>
                <p>{`Released: ${filmDetails.release_date}`}</p>
                <p>{`Director: ${filmDetails.director}`}</p>
                <p>{`Episode: ${filmDetails.episode_id}`}</p>
            </div>
            <div>
                <h3>Characters</h3>
                {
                    characters.map((char, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/character/${char.id}`}>
                                    {char.name}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
            <div>
                <h3>Planets</h3>
                {
                    planets.map((planet, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/planets/${planet.id}`}>
                                    {planet.name}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Film;