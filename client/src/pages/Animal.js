import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import AddAnimalModal from '../components/Modal/AddAnimaModal';
import AnimalList from '../components/AnimalList';

import "bootstrap/dist/css/bootstrap.min.css";


const Animal = () => {
  const { username: userParam } = useParams();
  const data = useQuery(QUERY_USER, { variables: { username: userParam }})
  const user = data?.user || [];

  return (
    <main>
        <div >
        <h3>{user.username}'s Pets</h3>
        
            <AnimalList
                animal={user.animal}
                title=""
                    />
                    
        </div>
    
    </main>
  );
};

export default Animal;