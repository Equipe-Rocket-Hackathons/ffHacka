import React from 'react';
import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';

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
		</Navigator>
	);
};