import { gql } from '@apollo/client';

export const QUERY_ME = gql `
query me {
    me {
      _id
      username
      animal {
        _id
        age
        animaltype
        breed
        createdAt
        petname
        weight
      }
    }
  }`;

  export const QUERY_USERS = gql 
  `query users {
    users {
      animal {
        age
        breed
        animaltype
        _id
        createdAt
        petname
        weight
      }
    }
  }`;

  export const QUERY_USER = gql 
  `query user($userUsername2: String) {
    user(username: $userUsername2) {
      username
      animal {
        _id
        age
        animaltype
        breed
        createdAt
        petname
        weight
      }
    }
  }`;
  

  export const QUERY_ANIMAL = gql `
    query animal($id: ID!) {
      animal(_id: $id) {
        _id
        age
        animaltype
        breed
        createdAt
        petname
        weight
      }
    }`;

    export const QUERY_ANIMALS = gql`
  query animals($username: String) {
    animals(username: $username) {
      _id
      petname
      age
      breed
      animaltype
      weight
      createdAt
    }
  }
`;