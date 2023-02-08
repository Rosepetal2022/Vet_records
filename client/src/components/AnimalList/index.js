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


const AnimalList = ({ me, title }) => {
    console.log(me, 'amimals in animal list');
    if (!me.length) {
        return <h1>No Pets yet!</h1>
    }

    return (
        <>
            <div className="card__div d-flex justify-content-center flex-wrap">
                {me.map((me) => (
                    <Card className="card"
                        key={me._id}
                    >
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        />
                        <CardBody className="card">
                            <CardTitle className="card__title">
                                {me.petname}
                            </CardTitle>
                            <CardSubtitle className="card__sub">
                                {me.animaltype}
                            </CardSubtitle>
                            <CardText className="card__text">
                               
                                <p className="card__text card__text--1">{me.breed}</p> 
                                <p className="card__text card_text--2">{me.weight}</p>

                                <Link to={`/SingleAnimal/${me._id}`}>
            
                                <Button className="page-button page-button--card">Go to Pet Profile</Button>
                            
                            </Link>
                            </CardText>
                           
                        </CardBody>\
                       
                            
                    </Card>
                ))}
            </div>
        </>
    );
};

export default AnimalList;