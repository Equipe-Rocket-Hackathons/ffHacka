import styled from 'styled-components/native';

type ContainerProps = {
    width?: string;
    height?: string;
}

export const Container = styled.View<ContainerProps>`
    background: ${({ theme }) => theme.colors.gray};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '1px'};
`;