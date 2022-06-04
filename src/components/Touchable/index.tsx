import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

export const Touchable: React.FC<TouchableOpacityProps> = ({ children }) => {
	return (
		<Container activeOpacity={.8}>
			{children}
		</Container>
	);
};