import React from 'react';
import { Container } from './styles';

type Props = {
    width?: string;
    height?: string;
}

export const Divider: React.FC<Props> = ({ width, height }) => {
    return (
        <Container width={width} height={height} />
    );
};