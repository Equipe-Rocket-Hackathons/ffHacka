import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type CustomIconStylesProps = {
    margin: string
    color: string
}

export const MaterialIcon = styled(MaterialIcons) <CustomIconStylesProps>`
    color: ${({ theme, color }) => color ? theme.colors[color] : theme.colors.gray};
    margin: ${({ margin }) => margin || 0};
`;