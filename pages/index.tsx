/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { AccessBtn } from '../components/access-button'
import { Container } from '../components/container'
import { Main } from '../components/home-page/maine'
import HomepageBtn from '../components/home-page/button'
import HomepageContent from '../components/home-page/content'
import { Grid } from '../components/home-page/grid'
import HomepageForm from '../components/home-page/form'
import HomepagePattern from '../components/home-page/pattern'
import PricingTitle from '../components/home-page/cards/pricing-title'
import PricingCard from '../components/home-page/cards/pricing-card'
import PricingCardMain from '../components/home-page/cards/pricing-card-main'
import Testimonial from './testimonials/Testimonial'
import { Angelina } from '../public/data'
import { PaddingWrapper } from '../components/padding-wrapper'
import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/auth-context'

const Homepage = () => {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {/* <div onClick={() => console.log(auth)}>click me</div> */}
      <Main>
        <HomepagePattern />
        <Grid>
          <Container>
            <PaddingWrapper>
              <HomepageContent />
            </PaddingWrapper>
          </Container>

          {!auth && (
            <PaddingWrapper>
              <HomepageForm></HomepageForm>
            </PaddingWrapper>
          )}
        </Grid>
        <PricingTitle />
        <Container>
          <PaddingWrapper>
            <div tw="lg:flex justify-center items-center  lg:mx-20 ">
              <PricingCard title="Hobby" price="79$" />
              <PricingCardMain title="Growth" price="149$" />
              <PricingCard title="Scale" price="349$" />
            </div>
          </PaddingWrapper>
        </Container>
      </Main>
      <Testimonial proprieties={Angelina} />
    </div>
  )
}

export default Homepage
