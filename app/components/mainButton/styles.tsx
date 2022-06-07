import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../config'
import { btnStyleType } from '.'

export const getStyle = (btnStyle: btnStyleType, isReady?: boolean) => {
  const styles = StyleSheet.create({
    container: {
      height: 58,
      width: '100%',
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: btnStyle.marginTop,
      backgroundColor: isReady ? COLORS.active : COLORS.gray
    },
    title: {
      fontSize: 14,
      lineHeight: 18,
      color: COLORS.white,
      fontFamily: FONTS.Roboto_medium
    }
  })
  return styles
}
