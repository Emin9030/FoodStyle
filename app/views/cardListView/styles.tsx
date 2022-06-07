import { StyleSheet } from 'react-native';
import { FONTS } from '../../config';

export const getStyle = () => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		absolute: {
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		},
		modalContentWrapper:{ 
			flex: 1,
			justifyContent: 'center',
			paddingHorizontal: 18,
		},
		header: {
			paddingTop: 9,
			paddingHorizontal: 18,
		},
		logo: {
			width: 22,
			height: 26
		},
		list: {
			flex: 1,
			marginTop: 32,
		},
		emptyText: {
			fontSize: 24,
			alignSelf: 'center',
		},
		cardWrapper: {
			width: '100%',
			paddingHorizontal: 18,
		},
		actionWrapper: {
			width: '100%',
			height: 50,
			elevation: 5,
			alignItems: 'center',
			paddingHorizontal: 18,
			flexDirection: 'row',
			backgroundColor: 'white',
		},
		actionButtonWrapper: {
			width: '100%',
			height: 50,
			paddingHorizontal: 18,
			alignItems: 'center',
			flexDirection: 'row',
			backgroundColor: 'white',
			elevation: 5,
			borderRadius: 6,
			marginBottom: 10,
		},
		addIcon: {
			width: 40,
			height: 40
		},
		input: {
			flex: 1,
			padding: 0,
			marginLeft: 10,
			fontSize: 18,
			lineHeight: 22,
			color: '#434343',
			fontFamily: FONTS.ProximaNovaAltBold
		}
	});
	return styles;
};
