import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 15px;
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 10px;
`;