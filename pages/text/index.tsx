import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const GET_LOGIN = gql`
  mutation signIn($input: SigninInput!) {
    signIn(input: $input) {
      ... on Token {
        accessToken
      }
    }
  }
`
const SIGNUP = gql`
  mutation signUp($signUpInput: SignUpInput!) {
    signUp(input: $signUpInput) {
      ... on VerificationToken {
        token
      }
      ... on EmailAlreadyExistsError {
        message
      }
    }
  }
`
const VERIFY = gql`
  mutation confirmRegistration($verifyToken: ConfirmationInput!) {
    confirmRegistration(input: $verifyToken) {
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

const TestPage = () => {
  const [token, setToken] = useState()
  const [doSignUp]: any = useMutation(SIGNUP, {
    variables: {
      signUpInput: {
        email: 'riacadsa344zzzczsad34zc@yahoo.com',
        password: 'alexandru',
        passwordConfirmation: 'alexandru',
      },
    },
  })
  //   const verifyToken = signUpData?.data?.signUp?.token
  const [doConfirm]: any = useMutation(VERIFY)

  //   const [isData, setIsData] = useState()
  //   const [login]: any = useMutation(GET_LOGIN, {
  //     variables: {
  //       input: {
  //         email: 'rickydrama1234@yahoo.com',
  //         password: 'alexandru',
  //       },
  //     },
  //   })
  const handleClick = async () => {
    // const { data } = await doSignUp()
    // const accessToken = data?.signUp?.token
    // console.log('this is access token', accessToken)
    try {
      const { data2 } = await doConfirm({
        variables: {
          verifyToken: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJia0YxcTlJWmdEMkNjMEpUdkF1WWNBIn0.gaNNh55pHnKa5kMG4vR7jtvXoJH0ZhGeurus1MLM-Mg',
          },
        },
      })
      console.log('Confirmation response', data2)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Check</button>
      </div>
    </div>
  )
}

export default TestPage
