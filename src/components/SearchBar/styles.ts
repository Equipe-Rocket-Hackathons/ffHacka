import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 50px;
    justify-content: center;
    padding: 0 15px;
    border-radius: 10px;
    align-self: center;
    elevation: 5;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.2;
    shadow-radius: 5px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: theme.colors.gray
})`
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-left: 10px;
`;
