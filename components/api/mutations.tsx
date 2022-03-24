import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation signIn($input: SigninInput!) {
    signIn(input: $input) {
      ... on Token {
        accessToken
        refreshToken
        expiresIn
      }
    }
  }
`
export const SIGNUP = gql`
  mutation signUp($signUpInput: SignUpInput!) {
    signUp(input: $signUpInput) {
      ... on VerificationToken {
        token
      }
      ... on EmailAlreadyExistsError {
        message
      }
      ... on InvalidPasswordError {
        message
      }
      ... on PasswordTooShortError {
        message
      }
      ... on PasswordMismatchError {
        message
      }
      ... on InvalidEmailError {
        message
      }
    }
  }
`

export const SIGNOUT = gql`
  mutation {
    signOut {
      ... on SignOutResponse {
        ok
      }
      ... on UserNotFoundError {
        message
      }
    }
  }
`

export const VERIFY = gql`
  mutation confirmRegistration($confirmationInput: ConfirmationInput!) {
    confirmRegistration(input: $confirmationInput) {
      ... on Token {
        accessToken
      }
      ... on UserNotFoundError {
        message
      }
      ... on AlreadyConfirmedError {
        message
      }
      ... on InvalidTokenError {
        message
      }
    }
  }
`

export const USER = gql`
  query {
    user {
      ... on User {
        email
      }
    }
  }
`
export const RECOVER = gql`
  mutation recoverUser($input: RecoverInput) {
    recoverUser(input: $input) {
      ... on VerificationToken {
        token
      }
      ... on UserNotFoundError {
        message
      }
    }
  }
`
