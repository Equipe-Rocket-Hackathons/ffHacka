import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../../components/CustomText';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

export const CreateItem: React.FC = () => {
    const { navigate } = useNavigation()

    return (
        <S.Container>
            <S.Content>
                <S.NewRegisterImage
                    source={require('../../assets/new_register/new_register.png')}
                    resizeMode='contain'
                />
                <CustomText
                    size={26}
                    align='center'
                    color='text'
                    weight='black'
                    padding='50px 20px 0 20px'
                >
                    Adicione facilmente os itens de sua casa
                </CustomText>
                <CustomText
                    size={14}
                    align='center'
                    color='text'
                    weight='regular'
                    padding='20px 35px 0 35px'
                >
                    Nosso scanner consegue identificar e adicionar automaticamente os itens do cômodo inteiro.
                </CustomText>
            </S.Content>
            <S.ButtonSection>
                <MainButton
                    isOutline
                    onPress={() => navigate('Home')}
                >
                    Fazer captura manual
                </MainButton>
                <MainButton
                    onPress={() => navigate('Home')}
                >
                    Escanear ambientes
                </MainButton>
            </S.ButtonSection>
        </S.Container>
    );
};