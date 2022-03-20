import React from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { Container } from '../../components/container'
import { PaddingWrapper } from '../../components/padding-wrapper'
import FaqListElement from './faq-list-element'

const FaqPage = () => {
  return (
    <div tw="bg-gray-50 text-black py-10">
      <Container>
        <PaddingWrapper>
          <h1 tw="text-center text-3xl font-extrabold lg:text-6xl mb-10">
            Frequently asked questions
          </h1>
          <ul>
            <FaqListElement />
          </ul>
        </PaddingWrapper>
      </Container>
    </div>
  )
}

export default FaqPage
