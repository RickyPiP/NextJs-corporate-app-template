import React from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { Container } from '../../components/container'
import { PaddingWrapper } from '../../components/padding-wrapper'
import Content from '../../components/content'
import EmployeeCard from './employee-card'

const CompanyPage = () => {
  return (
    <div tw="bg-gray-900 text-white py-5 ">
      <Container>
        <PaddingWrapper>
          <Content
            title="Meet our team"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          />
          <EmployeeCard />
        </PaddingWrapper>
      </Container>
    </div>
  )
}

export default CompanyPage
