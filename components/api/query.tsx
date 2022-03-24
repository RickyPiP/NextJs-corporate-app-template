import { gql } from '@apollo/client'

export const USER = gql`
  query {
    user {
      ... on User {
        email
      }
    }
  }
`
