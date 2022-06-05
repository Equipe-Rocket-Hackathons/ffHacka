import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { CardItemProps } from '../../@types/globalTypes';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CustomText } from '../../components/CustomText';
import { Flex } from '../../components/Flex';
import { Item } from '../../components/Item';
import { MainButton } from '../../components/MainButton';
import * as S from './styles';

type ListItemsParams = {
    item: CardItemProps
}

const list = [
    {
        id: 1,
        title: 'iPhone 13',
        image: 'https://conteudo.imguol.com.br/c/noticias/d2/2021/11/17/iphone-13-1637175911288_v2_4x3.jpg'
    },
    {
        id: 2,
        title: 'Macbook Air',
        image: 'https://i.pinimg.com/originals/9c/88/d2/9c88d2aac11509f9ddb763ccdb071bc4.jpg'
    },
    {
        id: 3,
        title: 'Sofa',
        image: 'https://images.tcdn.com.br/img/img_prod/687962/sofa_rovere_retratil_com_chaise_longue_direita_513_1_8b4a606e5d92087c82214cedaad46c8c.jpeg'
    },
]

export const ListItems: React.FC = () => {
    const { setOptions, goBack, navigate } = useNavigation()
    const route = useRoute()
    const { item } = route.params as ListItemsParams
    const [listItems] = useState(item.id === 2 ? list : [])
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
            <FlatList
                data={listItems}
                keyExtractor={(_, index) => String(index)}
                contentContainerStyle={{ padding: 22 }}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
            />
            <MainButton isFooter color={color} onPress={() => navigate('CreateItem')}>
                Adicionar {subTitle}
            </MainButton>
        </S.Container>
    );
};