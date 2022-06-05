import styled from 'styled-components/native';

type ContainerProps = {
    color: string;
}

export const Container = styled.View<ContainerProps>`
    width: 129px;
    height: 175px;
    border-radius: 20px;
    background: ${({ theme, color }) => theme.colors[color || 'gray']};
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 100px;
`;
