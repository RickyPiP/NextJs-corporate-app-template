import React from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { Andrew, John } from '../../public/data'
import Testimonial from './Testimonial'

const TestimonialPage = () => {
  return (
    <div tw="-mt-2">
      <Testimonial proprieties={Andrew} />
      <Testimonial proprieties={John} />
    </div>
  )
}

export default TestimonialPage
