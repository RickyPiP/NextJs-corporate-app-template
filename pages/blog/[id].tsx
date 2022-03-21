import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

import { Container } from '../../components/container'
import { PaddingWrapper } from '../../components/padding-wrapper'
import { BlogData } from '../../public/data'

export const getStaticPaths = async () => {
  const blog = await BlogData.map(item => item.id)
  const paths = await blog.map(id => ({ params: { id: id.toString() } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  return {
    props: {
      data: BlogData,
    },
  }
}

const RandomPage = ({ data }: any) => {
  const router = useRouter()
  const mappedData = data.map((item: any) => {
    if (item.id == router.query.id)
      return (
        <div>
          {' '}
          <div tw=" mb-10">
            <Container>
              <PaddingWrapper>
                <div tw="md:grid md:grid-cols-2 md:space-x-20">
                  <div tw="max-w-2xl mb-4 relative h-96 w-full">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={item.bgUrl}
                      alt=""
                    />
                  </div>
                  <div tw="text-white text-left ">
                    <h1 tw="text-2xl font-bold">{item.title}</h1>
                    <p tw="text-sm mb-5">
                      Written by <span tw="text-indigo-600">{item.name}</span>
                    </p>
                    <p>
                      <i>{item.text}</i>
                    </p>
                  </div>
                </div>
              </PaddingWrapper>
            </Container>
          </div>
        </div>
      )
  })

  return <div>{mappedData}</div>
}

export default RandomPage
