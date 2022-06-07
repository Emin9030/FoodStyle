import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

export const BackIcon: FC<{ width?: number; height?: number; color?: string }> = () => {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
      <Path fillRule='evenodd' clipRule='evenodd' d='M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z' fill='#242424' />
    </Svg>
  )
}
