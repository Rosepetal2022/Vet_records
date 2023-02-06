import React from 'react';
//import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';
//import { Link, useLocation } from 'react-router-dom';
import {
    Button,
    CardTitle,
    CardText,
    Card,
    CardBody,
    CardSubtitle
} from 'reactstrap';


const AnimalList = ({ animal, title }) => {
    /*if(!animal.length) {
        return <h1>No Pets yet!</h1>
    }*/

    return (
        <>
         
            <div>
                My Pets
                {animal && animal?.map(animal => (
                    <div>{animal.petname}</div>
                ))}
            </div>
        </>
    );
    };

export default AnimalList;