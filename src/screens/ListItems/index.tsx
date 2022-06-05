import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { CardItemProps } from '../../@types/globalTypes';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CustomText } from '../../components/CustomText';
import { Flex } from '../../components/Flex';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

type ListItemsParams = {
    item: CardItemProps
}

export const ListItems: React.FC = () => {
    const [listItems, setListItems] = useState([])
    const { setOptions, goBack, navigate } = useNavigation()
    const route = useRoute()
    const { item } = route.params as ListItemsParams
    const { color, id, image, title, subTitle } = item

    useLayoutEffect(() => {
        setOptions({
            headerLeft: () => (
                <ButtonIcon icon='keyboard-arrow-left' onPress={goBack} />
            ),
            title: title,
            headerTitleAlign: 'left',
            headerTitle: () => (
                <CustomText
                    size={16}
                    weight='extraBold'
                    color='white'
                >
                    {title}
                </CustomText>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 22
            }
        })
    }, [])

    return (
        <S.Container>
            <S.Header color={color}>
                <Flex flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <CustomText size={40} weight='bold' color='white'>
                            {listItems.length < 10 && listItems.length ? `0${listItems.length}` : listItems.length}
                        </CustomText>
                        <CustomText color='white' margin='5px 0 0 0'>
                            Total de {subTitle}
                        </CustomText>
                    </Flex>
                    <S.ImageContainer>
                        <SharedElement id={`item.${id}.photo`}>
                            <S.CardImage source={image} resizeMode='contain' />
                        </SharedElement>
                    </S.ImageContainer>
                </Flex>
            </S.Header>
            <MainButton isFooter color={color} onPress={() => navigate('CreateItem')}>
                Adicionar {subTitle}
            </MainButton>
        </S.Container>
    );
};