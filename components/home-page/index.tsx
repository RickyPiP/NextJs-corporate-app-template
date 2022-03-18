/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import styled from "@emotion/styled";
import AccesBtn from "./button";
import { Container } from "../container";
import { Main } from "./maine";
import HomepageBtn from "./button";
import HomepageContent from "./content";
import { Grid } from "./grid";
import HomepageForm from "./form";
import HomepagePattern from "./pattern";
import PricingTitle from "./cards/pricing-title";
import PricingCard from "./cards/pricing-card";
import PricingCardMain from "./cards/pricing-card-main";
import Testimonial from "../testimonial-page/Testimonial";
import { Angelina } from "../../assets/data";
import { PaddingWrapper } from "../padding-wrapper";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Homepage = () => {
  const { auth } = useContext(AuthContext);
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
  );
};

export default Homepage;
