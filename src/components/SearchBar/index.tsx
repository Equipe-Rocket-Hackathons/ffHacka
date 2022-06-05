import React from 'react';
import { CustomIcon } from '../CustomIcon';
import { Flex } from '../Flex';
import * as S from './styles';
import { Input } from './styles';

export const SearchBar: React.FC = () => {
    return (
        <S.Container>
            <Flex flexDirection='row'>
                <CustomIcon name='search' color='text' />
                <Input placeholder='Busque por um bem específico' />
            </Flex>
        </S.Container>
    );
};