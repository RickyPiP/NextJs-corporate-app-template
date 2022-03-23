import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Image from 'next/image'

import { PurpleButton } from '../purple-button'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth-context'
import axios from 'axios'
import AlertMessage from '../../helper-functions/alert-message'
import Input from '../home-page/input'
import { useMutation, gql } from '@apollo/client'

const LoginForm = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setError] = useState<any>()
  const { setAuth, setIsModalOpen, rememberMe, setRememberMe }: any =
    useContext(AuthContext)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const search = async () => {
      await axios
        .post('http://35.233.55.158:7350/v1/auth/token', {
          email: email,
          password: password,
          grant_type: 'password',
        })
        .then(res => {
          setAuth(res.data.access_token)
          setIsModalOpen(false)
          // console.log(res.data.access_token)
        })
        .catch(function (error) {
          if (error.response) {
            setError(error.response.data.details[0].message)
          }
        })
    }
    search()
  }

  const handleChange = (e: any) => {
    localStorage.setItem('check', JSON.stringify(e.target.checked))
    setRememberMe(e.target.checked)
  }

  return (
    <div tw="fixed  bg-white  text-black m-10 rounded-2xl">
      <div tw="p-10 mb-3">
        <form onSubmit={handleSubmit}>
          <div tw="text-center">
            <div tw="sm:mx-auto sm:w-full sm:max-w-md">
              <div tw="relative h-12 w-auto">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                  layout="fill"
                />
              </div>
              <h2 tw="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p tw="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link
                  href="/"
                  tw="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  start your 14-day free trial
                </Link>
              </p>
            </div>
          </div>
          <div tw="my-5">
            <Input
              error={errors}
              type="text"
              placeholder="Email address"
              name="email"
              handleChange={(e): any => {
                setEmail(e.target.value)
              }}
            />
            <Input
              error={errors}
              type="password"
              placeholder="Enter password"
              name="password"
              handleChange={(e): any => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div tw="flex items-center justify-between mb-7">
            <div tw="flex items-center">
              <input
                defaultChecked={rememberMe}
                onChange={handleChange}
                id="remember-me"
                name="remember-me"
                type="checkbox"
                tw="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                tw="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div tw="text-sm">
              <Link
                href="/recovery"
                tw="font-medium text-indigo-600 hover:text-indigo-500"
              >
                <a onClick={() => setIsModalOpen(false)}>
                  Forgot your password?
                </a>
              </Link>
            </div>
          </div>
          <PurpleButton>Sign in</PurpleButton>
          <div tw="mt-3">{AlertMessage(errors, 'Cannot log in')}</div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
