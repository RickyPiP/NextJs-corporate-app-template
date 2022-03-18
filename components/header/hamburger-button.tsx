/** @jsxImportSource @emotion/react */
import React from 'react'
import tw from 'twin.macro'
import { Icon } from '@iconify/react'

type HamburgerProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const HamburgerBtn = (props: HamburgerProps) => {
  return (
    <div
      tw="md:hidden hover:bg-gray-700 p-1 rounded-md cursor-pointer"
      onClick={props.onClick}
    >
      <Icon icon="charm:menu-hamburger" style={{ fontSize: '24px' }} />
    </div>
  )
}
