import React from 'react';
import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes: React.FC = () => {
	const { colors } = useTheme();

	return (
		<Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: colors.background
				}
			}}
		>
			<Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
			<Screen name='Home' component={Home} options={{ headerShown: false }} />
		</Navigator>
	);
};