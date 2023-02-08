import React from 'react';
import { useMutation } from '@apollo/client';
//import Auth from '../../utils/auth';
import { Link, useLocation } from 'react-router-dom';
import {
    Button,
    CardTitle,
    CardText,
    Card,
    CardBody,
    CardSubtitle
} from 'reactstrap';


const AnimalList = ({ animals, title }) => {
 console.log(animals);
    if(!animals.length) {
        return <h1>No Pets yet!</h1>
    }

    return (
        <div>
            <h3>{title}</h3>
            {animals &&
                animals.map(animals => (
                    <div key={animals.id}>
                        <p>{animals.name}</p>
                    </div>
                ))}
        </div>
    );
};

export default AnimalList;