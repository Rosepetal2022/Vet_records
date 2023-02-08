import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMALS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AddAnimalModal from '../components/Modal/AddAnimaModal';
import AnimalList from '../components/AnimalList';
import { Spinner } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";

const SingleAnimal = (props) => {
    const { id: animalId } = useParams();
    const { loading, data } = useQuery(QUERY_ANIMALS, {variables: { id: animalId }})
    const animal = data?.animal || [];
    console.log(animal, "animal in single animal")
    
    return (
        <div>
            {animal.petname}
        </div>
    )
}

export default SingleAnimal;