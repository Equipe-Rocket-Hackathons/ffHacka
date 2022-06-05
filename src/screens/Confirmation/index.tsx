import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../../components/CustomText';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

export const Confirmation: React.FC = () => {
    return (
        <S.Container>
            <S.StarImage source={require('../../assets/star/star.png')} resizeMode='contain' />
            
            <S.Content>
                <CustomText
                    size={24}
                    color='text'
                    weight='black'
                    padding='50px 0 0 0'
                    margin='auto'
                >
                    Enviado para análise
                </CustomText>
                <CustomText
                    size={14}
                    color='text'
                    padding='5px 15px 0 15px'
                    align='center'
                >
                Em até 5 dias úteis, você receberá a confirmação em seu app.
                </CustomText>

            </S.Content>

            <MainButton
                isFooter
                onPress={() => navigate('Home')}
            >
                Adicionar novo item
            </MainButton>

        </S.Container>
    );
};