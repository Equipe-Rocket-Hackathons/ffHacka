import React from 'react';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomText } from '../../components/CustomText';
import { MainButton } from '../../components/MainButton';
import { Container } from './styles';

export const Onboarding: React.FC = () => {
    return (
        <Container>
            <CustomText>
                Teste
            </CustomText>
            <CustomIcon name='verified-user' />
            <MainButton isFooter isOutline>Teste</MainButton>
        </Container>
    );
};