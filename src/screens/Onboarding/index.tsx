import React from 'react';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomText } from '../../components/CustomText';
import { Container } from './styles';

export const Onboarding: React.FC = () => {
    return (
        <Container>
            <CustomText>
                Teste
            </CustomText>
            <CustomIcon name='verified-user' />
        </Container>
    );
};