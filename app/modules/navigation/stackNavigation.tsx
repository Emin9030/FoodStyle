import React, { FC } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { ROUTES } from './routes';
import { CardListView } from '../../views/cardListView';

const Stack = createStackNavigator()

export const StackMainNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CardListView}
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid
      })}>
      <Stack.Screen name={ROUTES.CardListView} component={CardListView} />
    </Stack.Navigator>
  )
}
