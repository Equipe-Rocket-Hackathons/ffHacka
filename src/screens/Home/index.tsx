import React from 'react';
import { FlatList } from 'react-native';
import { CardCalendar } from '../../components/CardCalendar';
import { CardItem } from '../../components/CardItem';
import { CustomText } from '../../components/CustomText';
import { Flex } from '../../components/Flex';
import { SearchBar } from '../../components/SearchBar';
import { VirtualScrollView } from '../../components/VirtualScrollView';
import * as S from './styles';

export const Home: React.FC = () => {

    const listCards = [
        {
            title: 'Residência',
            color: 'purple',
            image: require('../../assets/house/house.png')
        },
        {
            title: 'Itens da residência',
            color: 'bluGreen',
            image: require('../../assets/sofa/sofa.png')
        },
        {
            title: 'Veículos',
            color: 'orange',
            image: require('../../assets/bike/bike.png')
        },
    ]


    return (
        <VirtualScrollView>
            <S.Container>
                <S.BannerImage source={require('../../assets/banner/banner.png')} resizeMode='cover' />
                <S.Content>
                    <S.SearchBarContainer>
                        <SearchBar />
                    </S.SearchBarContainer>
                    <CustomText size={12} color='text' weight='bold' margin='30px 0 10px 0'>
                        Proximo registro previsto
                    </CustomText>
                    <CardCalendar />
                    <CustomText
                        size={22}
                        weight='extraBold'
                        color='text'
                        margin='20px 0 27px 0'
                    >
                        Selecione o seu bem
                    </CustomText>
                </S.Content>
                <FlatList
                    data={listCards}
                    horizontal
                    keyExtractor={(_, index) => String(index)}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 22 }}
                    ItemSeparatorComponent={() => <S.ItemSeparator />}
                    renderItem={({ item }) => (
                        <CardItem
                            title={item.title}
                            image={item.image}
                            color={item.color}
                        />
                    )}
                />
                <S.Content>
                    <Flex
                        flexDirection='row'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <CustomText
                            size={22}
                            weight='extraBold'
                            color='text'
                            margin='45px 0 5px 0'
                        >
                            Meus registros
                        </CustomText>
                        <CustomText
                            color='text'
                            size={12}
                            margin='45px 0 5px 0'
                        >
                            Ver mais
                        </CustomText>
                    </Flex>
                    <CustomText size={12} weight='bold'>Total de 34 registros</CustomText>
                </S.Content>
            </S.Container>
        </VirtualScrollView>
    );
};