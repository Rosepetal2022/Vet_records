import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMAL, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import "bootstrap/dist/css/bootstrap.min.css";

const SingleAnimal = (props) => {
    const { id: animalId } = useParams();
    const { loading, data } = useQuery(QUERY_ANIMAL, {variables: { id: animalId }})
    const animal = data?.animal || [];
    console.log(animal, "animal in single animal")
    
    return (
        <>
        <div className="petname">
            <h1 className="petname__heading">{animal.petname}</h1>
            <span className="petname__span">{animal.animaltype}</span>
            <span className="petname__span">{animal.breed}</span>
            <span className="petname__span">{animal.weight}</span>

        </div>
        </>
    )
}

export default SingleAnimal;