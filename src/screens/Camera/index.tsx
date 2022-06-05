import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon';
import { MainButton } from '../../components/MainButton';
import { Container } from './styles';

export const Camera: React.FC = () => {
    const { navigate, goBack, setOptions } = useNavigation()

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <ButtonIcon icon='close' onPress={goBack} />
            ),
            headerRightContainerStyle: {
                paddingRight: 22
            }
        })
    }, [])

    return (
        <Container>
            <StatusBar style='light' />
            <MainButton isFooter onPress={() => navigate('FormItem')}>
                Capturar e continuar
            </MainButton>
        </Container>
    );
};