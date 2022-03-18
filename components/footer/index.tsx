/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import tw from "twin.macro";
import "twin.macro";
import List from "./list";
import { Container } from "../container";
import Input from "../home-page/input";
import { PurpleButton } from "../purple-button";
import FooterIcon from "./footer-icon";
import { solutions, support, company, legal } from "../../assets/data";

const Footer = () => {
  return (
    <Container>
      <div tw="lg:flex lg:justify-between">
        <div tw="grid grid-cols-2 space-x-2 min-w-[300px]">
          <div tw="sm:grid sm:grid-cols-2">
            <List data={solutions} title="solutions" />
            <List data={support} title="support" />
          </div>
          <div tw="sm:grid sm:grid-cols-2">
            <List data={company} title="company" />
            <List data={legal} title="legal" />
          </div>
        </div>
        <div tw="p-5">
          <div tw="px-5">
            <h3 tw="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-2">
              Subscribe to our newsletter
            </h3>
            <p tw=" text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div tw="md:flex lg:justify-between items-center md:space-x-2">
              <div tw="md:w-80">
                <Input
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                />
              </div>
              <div>
                <PurpleButton
                  onClick={() => alert("Function not yet available")}
                >
                  Subscribe
                </PurpleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="p-5 border-t border-gray-500 md:flex md:items-center md:justify-between">
        <div tw="px-5 flex space-x-8 ">
          <FooterIcon icon="bi:facebook" />
          <FooterIcon icon="bi:instagram" />
          <FooterIcon icon="bi:twitter" />
          <FooterIcon icon="bi:github" />
          <FooterIcon icon="bi:dribbble" />
        </div>
        <div>
          <p tw="mt-8 px-5 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
