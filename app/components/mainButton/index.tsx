import React, { FC, memo, useMemo } from 'react'
import { Text, Pressable } from 'react-native'
import { useAppContext } from '../../modules/context'
import { getStyle } from './styles'

interface Props {
  title: string
  isReady?: boolean
  btnStyle?: btnStyleType
  isTranslate?: boolean
  onPress: () => any
}

export type btnStyleType = { marginTop: number }

export const MainButton: FC<Props> = memo(({ btnStyle = {} as btnStyleType, title = '', isReady = true, isTranslate = true, onPress }: Props) => {
  const styles = useMemo(() => getStyle(btnStyle, isReady), [btnStyle, isReady])
  const {
    LocalizationContext: { translation }
  } = useAppContext()

  const onPressMainButton = (): void => {
    onPress && onPress()
  }

  return (
    <Pressable onPress={onPressMainButton} disabled={!isReady} style={({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }]}>
      <Text style={styles.title} numberOfLines={1}>
        {(isTranslate ? translation(title) : title).toUpperCase()}
      </Text>
    </Pressable>
  )
})
