import React from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { Container } from '../../components/container'
import Content from '../../components/content'
import LoginModal from '../../components/modals/login-modal'
import { PaddingWrapper } from '../../components/padding-wrapper'
import BlogElement from './blog-element'

const Blog = () => {
  return (
    <div tw="mb-40 ">
      <Container>
        <PaddingWrapper>
          <Content
            title="From the blog"
            text="Lorem ipsum dolores idealogies."
            primary
          />
          <BlogElement />
        </PaddingWrapper>
      </Container>
    </div>
  )
}

export default Blog
