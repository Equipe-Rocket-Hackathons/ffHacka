import React from 'react';
import { useTheme } from 'styled-components';
import { Onboarding } from '../screens/Onboarding';
import { Home } from '../screens/Home';
import { CreateItem } from '../screens/CreateItem';
import { Confirmation } from '../screens/Confirmation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { ListItems } from '../screens/ListItems';

const { Navigator, Screen } = createSharedElementStackNavigator();

export const StackRoutes: React.FC = () => {
	const { colors } = useTheme();

	return (
		<Navigator
			initialRouteName='Onboarding'
			screenOptions={{
				cardStyle: {
					backgroundColor: colors.background
				}
			}}
		>
			<Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
			<Screen name='Home' component={Home} options={{ headerShown: false }} />
			<Screen name='Confirmation' component={Confirmation} options={{ headerShown: false }} />
			<Screen
				name='CreateItem'
				component={CreateItem}
				options={{
					title: '',
					headerTransparent: true,
					headerLeft: () => <></>,
				}}
			/>
			<Screen
				name='ListItems'
				component={ListItems}
				options={{
					title: '',
					headerTransparent: true,
				}}
				sharedElements={(route) => {
					const { item } = route.params;
					return [`item.${item.id}.photo`];
				}}
			/>
		</Navigator>
	);
};