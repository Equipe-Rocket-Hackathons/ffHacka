import { useTheme } from 'styled-components';
import React, { ReactNode } from 'react';
import { Container } from './styles';
import { theme } from '../../global/theme';

type Props = {
	loading?: boolean;
	size?: number | 'large' | 'small';
	children?: ReactNode;
	color?: keyof typeof theme.colors;
};

export const Loader: React.FC<Props> = ({
	loading = true,
	size = 'large',
	color = 'primary',
	children
}) => {
	const { colors } = useTheme();

	if (loading) {

		return <Container size={size} color={colors[color]} />;
	}

	return <>{children}</>;
};