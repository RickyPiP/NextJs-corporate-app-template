import React from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { BlogData } from '../../public/data'

const BlogElement = () => {
  const blogPost = BlogData.map(item => {
    return (
      <div
        tw="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
        key={item.title}
      >
        <div tw="flex-shrink-0">
          <img tw="h-48 w-full object-cover" src={item.bgUrl} alt="" />
        </div>
        <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
          <div tw="flex-1">
            <p tw="text-sm font-medium text-indigo-600">
              <a href={`/blog/${item.id}`} tw="hover:underline">
                {' '}
                {item.type}{' '}
              </a>
            </p>
            <a href="#" tw="block mt-2">
              <p tw="text-xl font-semibold text-gray-900">{item.title}</p>
              <p tw="mt-3 text-base text-gray-500">{item.text}</p>
            </a>
          </div>
          <div tw="mt-6 flex items-center">
            <div tw="flex-shrink-0">
              <a href="#">
                <img tw="h-10 w-10 rounded-full" src={item.avatarUrl} alt="" />
              </a>
            </div>
            <div tw="ml-3">
              <p tw="text-sm font-medium text-gray-900">
                <a href="#" tw="hover:underline">
                  {' '}
                  {item.name}{' '}
                </a>
              </p>
              <div tw="flex space-x-1 text-sm text-gray-500">
                <time> {item.date} </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {item.readTime} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return <div tw="grid gap-4 lg:grid-cols-3">{blogPost}</div>
}

export default BlogElement
