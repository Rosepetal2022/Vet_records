import React from 'react';
//import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AddAnimalModal from '../components/Modal/AddAnimaModal';
import AnimalList from '../components/AnimalList';

import "bootstrap/dist/css/bootstrap.min.css";


const Animal = () => {
  const data = useQuery(QUERY_ME)
  const me = data?.me || [];
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className=''>
        {loggedIn && (
          <AddAnimalModal />
        )}
      </div>
      <div className={`${loggedIn && ''}`}>
          <AnimalList
              animal={me.animal}
              title="My Pets"
             /> 
      </div>
    </main>
  );
};

export default Animal;