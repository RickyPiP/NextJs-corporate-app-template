import React, { useCallback } from 'react'

import { useRef } from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import useOutsideClick from '../../hooks/useOutsideClick'
import LoginForm from './login-form'

const LoginModal = ({ close }: any) => {
  const ref: any = useRef()
  useOutsideClick(
    ref,
    useCallback(() => close(), [close]),
  )
  return (
    <div
      id="overlay"
      tw="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
    >
      <div ref={ref} tw="flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginModal
