import React from 'react';
import { theme } from '../../global/theme';
import { MaterialIcon } from './styles';

type CustomIconProps = {
	name: string;
	color?: keyof typeof theme.colors;
	margin?: string;
	size?: number;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
	name,
	color = 'gray',
	margin = '0',
	size = 24,
	...rest
}) => {
	return (
		<MaterialIcon
			name={name}
			color={color}
			size={size}
			margin={margin}
			{...rest}
		/>
	);
};
