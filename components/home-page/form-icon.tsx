import styled from '@emotion/styled'
import tw from 'twin.macro'
import 'twin.macro'
import { Icon } from '@iconify/react'
/** @jsxImportSource @emotion/react */

// const IconWrapper = styled.div(
//   tw` flex items-center justify-center py-2 w-1/3 rounded-md text-gray-600 shadow border-solid border border-gray-300 hover:cursor-pointer hover:bg-gray-100`,
// )

type IconProps = {
  icon: string
}

const FormIcon = ({ icon }: IconProps) => {
  return (
    <div tw="border-2 flex items-center justify-center py-2 w-1/3 rounded-md text-gray-600 shadow border-solid border border-gray-300 hover:cursor-pointer hover:bg-gray-100">
      <Icon icon={icon} style={{ fontSize: '20px' }} />
    </div>
  )
}

export default FormIcon
