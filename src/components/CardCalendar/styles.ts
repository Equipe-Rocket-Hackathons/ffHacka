import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 20px 15px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.white};
`;
