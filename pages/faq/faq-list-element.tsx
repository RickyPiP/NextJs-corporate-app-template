import React from 'react'
import { FaqData } from '../../public/data'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { useState } from 'react'
import DownArrow from './down-icon'
import UpArrow from './up-icon'
const FaqListElement = () => {
  const [selected, setSelected] = useState<null | number>(null)
  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  const mappedData = FaqData.map((item, i) => {
    return (
      <div
        key={item.answer}
        tw="border-t border-gray-300 pt-5 lg:max-w-5xl lg:mx-auto "
      >
        <div tw="hover:cursor-pointer transition-all duration-300">
          <div
            tw="flex justify-between font-semibold text-gray-900 text-lg "
            onClick={() => toggle(i)}
          >
            {item.question}{' '}
            <span tw="text-gray-400">
              {selected === i ? <UpArrow /> : <DownArrow />}
            </span>
          </div>
          <br />
          <div tw="text-gray-400 transition-all duration-300">
            {selected === i && item.answer}
          </div>
        </div>
      </div>
    )
  })

  return <div>{mappedData}</div>
}

export default FaqListElement
