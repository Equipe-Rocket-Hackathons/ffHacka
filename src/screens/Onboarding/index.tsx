import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../../components/CustomText';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

export const Onboarding: React.FC = () => {
    const { navigate } = useNavigation()

    return (
        <S.Container>
            <S.OnboardingImage source={require('../../assets/onboarding/onboarding.png')} resizeMode='contain' />

            <S.Content>
                <CustomText
                    size={24}
                    color='text'
                    weight='black'
                    padding='50px 0 0 0'
                >
                    Registe seus bens de forma fácil e ágil garantindo o seguro deles!
                </CustomText>
            </S.Content>
            <MainButton
                isFooter
                onPress={() => navigate('Home')}
            >
                Continuar
            </MainButton>
        </S.Container>
    );
};