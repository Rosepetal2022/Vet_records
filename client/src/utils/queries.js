import { gql } from '@apollo/client';

export const QUERY_ME = gql `
query Me {
    me {
      _id
      username
      animals {
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

  export const QUERY_USERS = gql `query User {
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
  `query User($userUsername2: String) {
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
    query animals {
      animals {
        _id
        age
        animaltype
        breed
        createdAt
        petname
        weight
      }
    }`;