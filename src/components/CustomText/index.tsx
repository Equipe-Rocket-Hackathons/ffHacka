import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import { theme } from '../../global/theme';
import { TextBase } from './styles';

export type Props = TextProps & {
	color?: keyof typeof theme.colors;
	size?: number;
	align?: string;
	weight?: keyof typeof theme.fonts;
	textDecoration?: 'line-through' | 'underline';
	margin?: string;
	lineHeight?: number;
	padding?: string;
	opacity?: number;
	children: ReactNode;
};

export const CustomText: React.FC<Props> = ({ children, ...rest }) => {
	return <TextBase {...rest}>{children}</TextBase>;
};