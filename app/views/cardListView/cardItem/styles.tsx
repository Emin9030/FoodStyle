import { StyleSheet } from 'react-native';
import { FONTS } from '../../../config';

export const getStyle = () => {
	const styles = StyleSheet.create({
		container: {
			width: '100%',
			marginBottom: 6,
			paddingLeft: 18,
			paddingRight: 14,
			paddingVertical: 14,
			borderRadius: 6,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: 'white',
			elevation: 3,
		},
		text: {
			flex: 1,
			fontSize: 18,
			lineHeight: 22,
			color: '#434343',
			fontFamily: FONTS.ProximaNovaAltBold
		},
		logo: {
			width: 24,
			height: 24,
		},
		menuItemWrapper: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
		menuTitle: {
			fontSize: 16,
			lineHeight: 20,
			color: '#11ce90',
			fontFamily: FONTS.ProximaNovaAltBold
		},
		icon: {
			width: 40,
			height: 40,
		},
	});
	return styles;
};
