import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';
import { toAlpha } from '../../utils/toAlpha';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 50px;
    justify-content: center;
    border-radius: 10px;
    align-self: center;
    border: 1px solid ${({ theme }) => toAlpha(theme.colors.gray, 30)};
`;

export const Input = styled(TextInput).attrs({
    placeholderTextColor: theme.colors.gray
})`
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-left: 10px;
`;
