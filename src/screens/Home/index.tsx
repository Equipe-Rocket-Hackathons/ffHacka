import React from 'react';
import { CardCalendar } from '../../components/CardCalendar';
import { CustomText } from '../../components/CustomText';
import { SearchBar } from '../../components/SearchBar';
import * as S from './styles';

export const Home: React.FC = () => {
    return (
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
                    margin='20px 0 0 0'
                >
                    Selecione o seu bem
                </CustomText>
            </S.Content>
        </S.Container>
    );
};