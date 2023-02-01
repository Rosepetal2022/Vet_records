import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AddAnimalModal from '../components/Modal/AddAnimaModal';
import AnimalList from '../components/AnimalList';

import "bootstrap/dist/css/bootstrap.min.css";


const Animal = () => {
  const { username: userParam } = useParams();
  const data = useQuery(QUERY_ME, { variables: { username: userParam }})
  const me = data?.me || [];
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className=''>
        {loggedIn && (
          <AddAnimalModal />
          
        )}
        This should only show up if I am logged in
      </div>
        <div className={`${loggedIn && ''}`}>
            
        </div>
    
    </main>
  );
};

export default Animal;