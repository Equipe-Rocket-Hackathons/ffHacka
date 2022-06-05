import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

export const Touchable: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => {
	return (
		<Container activeOpacity={.8} {...rest} >
			{children}
		</Container>
	);
};
