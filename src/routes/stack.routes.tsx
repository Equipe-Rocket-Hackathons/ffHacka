import React from 'react';
import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';
import { Home } from '../screens/Home';
import { CreateItem } from '../screens/CreateItem';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes: React.FC = () => {
	const { colors } = useTheme();

	return (
		<Navigator
			initialRouteName='Confirmation'
			screenOptions={{
				contentStyle: {
					backgroundColor: colors.background
				}
			}}
		>
			<Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
			<Screen name='Home' component={Home} options={{ headerShown: false }} />
			<Screen name='CreateItem' component={CreateItem} options={{ headerShown: false }} />
			<Screen name='Confirmation' component={Confirmation} options={{ headerShown: false }} />
		</Navigator>
	);
};