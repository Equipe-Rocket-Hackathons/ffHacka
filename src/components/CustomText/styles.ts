import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native';
import styled from 'styled-components/native';

type TextProps = & {
	color?: string;
	size?: number;
	align?: string;
	weight?: string;
	margin?: string;
	lineHeight?: number;
	padding?: string;
	opacity?: number;
	textDecoration?: 'line-through' | 'underline';
};

export const TextBase = styled(Text) <TextProps>`
    color: ${({ theme, color }) => theme.colors[color || 'gray']};
  font-size: ${({ size }) => RFValue(size || 14)}px;
  font-family: ${({ weight, theme }) => theme.fonts[weight || 'regular']};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  line-height: ${({ lineHeight, size }) =>
		RFValue(lineHeight || size || 14) + 7}px;
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ align }) => align || 'left'};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;