import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ANIMALS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AddAnimalModal from '../components/Modal/AddAnimaModal';
import AnimalList from '../components/AnimalList';
import { Spinner } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";


const Animal = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_ME);
  const loggedIn = Auth.loggedIn();

  const me = data?.me || [];
  console.log(me.animal, 'me in Animal');



  return (
        <div className="animal">
          <div>
              {loggedIn && (
                  <AddAnimalModal />
              )}
          </div>
          <div className={`${loggedIn && ''}`}>
          {loading ? (
                    <Spinner color='primary'>Loading...</Spinner>
                ) :
               (
               <AnimalList
                  me={me.animal} 
                  title={"My Pets"} 
               />
              )}
          </div>
          </div>
  );
};

export default Animal;