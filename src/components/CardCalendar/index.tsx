import React from 'react';
import { CustomText } from '../CustomText';
import { Divider } from '../Divider';
import { Flex } from '../Flex';
import { Container } from './styles';

export const CardCalendar: React.FC = () => {
    return (
        <Container>
            <Flex flexDirection='row'>
                <CustomText weight='bold' color='text' margin='0 15px 0 0'>
                    Set
                    <CustomText color='text'>embro</CustomText>
                </CustomText>
                <Divider width='1px' height='100%' />
                <CustomText color='text' margin='0 10px 0 20px'>
                    Atualização dos bens
                </CustomText>
            </Flex>
        </Container>
    );
};