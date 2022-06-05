import { CommonActions, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useLayoutEffect } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CustomText } from '../../components/CustomText';
import { Input } from '../../components/Input';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

export const FormItem: React.FC = () => {
    const { navigate, goBack, setOptions, dispatch } = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerLeft: () => (
                <ButtonIcon icon='keyboard-arrow-left' color='primary' onPress={goBack} />
            ),
            headerLeftContainerStyle: {
                paddingLeft: 22
            }
        })
    }, [])

    const resetNavigation = useCallback(() => {
        dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{
                    name: 'Confirmation'
                }]
            })
        )
    }, [])

    return (
        <S.Container>
            <StatusBar style='auto' />
            <S.Content>
                <CustomText
                    size={12}
                    color='text'
                    weight='bold'
                    margin='20px 0'
                >
                    Registro de item
                </CustomText>
                <S.InputContainer>
                    <Input label='Número de registro' value={Math.random().toString(36).substr(2, 9)} />
                </S.InputContainer>
                <S.InputContainer>
                    <Input label='Item' />
                </S.InputContainer>
                <S.InputContainer>
                    <Input label='Descrição' multiline numberOfLines={4} />
                </S.InputContainer>
                <S.InputContainer>
                    <Input label='Número da nota fiscal eletrônica (NFE)' />
                </S.InputContainer>
            </S.Content>
            <MainButton
                isFooter
                onPress={resetNavigation}
            >
                Enviar para análise
            </MainButton>
        </S.Container>
    );
};