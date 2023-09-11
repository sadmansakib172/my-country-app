import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} =country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p> <small>Code: {cca3}</small> </p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'i will visit this country one day InsAllah'}
        </div>
    );
};

export default Country;