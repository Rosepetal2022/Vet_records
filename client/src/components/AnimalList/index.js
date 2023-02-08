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
            <div>
                {me.map((me) => (
                    <Card
                        key={me._id}
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {me.petname}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {me.animaltype}
                            </CardSubtitle>
                            <CardText>
                                {me.breed}
                                {me.weight}
                            </CardText>
                            <Button>
                                Go to Pet Profile
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default AnimalList;