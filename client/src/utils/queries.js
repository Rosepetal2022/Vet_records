import { gql } from '@apollo/client';

export const QUERY_ME = gql `
query Me {
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