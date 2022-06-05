import { CommonActions, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useLayoutEffect } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon';
import { MainButton } from '../../components/MainButton';
import { Container } from './styles';

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
        <Container>
            <StatusBar style='auto' />
            <MainButton
                isFooter
                onPress={resetNavigation}
            >
                Enviar para análise
            </MainButton>
        </Container>
    );
};