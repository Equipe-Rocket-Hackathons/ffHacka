import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { CustomText } from '../CustomText';
import { Flex } from '../Flex';
import * as S from './styles';

type Props = {
    title: string;
    color: string;
    image: ImageSourcePropType
}

export const CardItem: React.FC<Props> = ({
    title,
    color,
    image
}) => {
    return (
        <S.Container color={color}>
            <CustomText color='white' margin='32px 0 15px 15px' size={16} weight='bold'>
                {title}
            </CustomText>
            <Flex flex={1} justifyContent='center' alignItems='center'>
                <S.CardImage source={image} resizeMode='contain' />
            </Flex>
        </S.Container>
    );
};