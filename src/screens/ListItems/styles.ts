import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window')

type HeaderProps = {
    color?: string
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View<HeaderProps>`
    width: 100%;
    height: ${width / 1.5}px;
    justify-content: flex-end;
    background: ${({ theme, color }) => theme.colors[color || 'gray']};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 22px;
    padding-bottom: 0;
    elevation: 5;
    shadow-color:${({ theme, color }) => theme.colors[color || 'gray']};
    shadow-offset: 0 4px;
    shadow-opacity: 0.6;
    shadow-radius: 10px;
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.View`
    width: ${width / 2}px;
    height: ${width / 2.5}px;
`;