import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StackMainNavigator } from './stackNavigation';

const navigationRef = createNavigationContainerRef();

export const RootNavigation: FC = memo(() => {
	const isAuthorized: boolean = false;

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer ref={navigationRef}>
				<StackMainNavigator />
			</NavigationContainer>
		</View>
	);
});
