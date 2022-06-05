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

            <CustomText
                size={12}
                
            >
                Registro de item
            </CustomText>
            <Input label='Número de registro' />
            <Input label='Item' />
            <Input label='Descrição' />
            <Input label='Número da nota fiscal eletrônica (NFE)' />
            <MainButton
                isFooter
                onPress={resetNavigation}
            >
                Enviar para análise
            </MainButton>
        </S.Container>
    );
};