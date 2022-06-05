import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { CardItemProps } from '../../@types/globalTypes';
import { CustomText } from '../CustomText';
import { Flex } from '../Flex';
import { Touchable } from '../Touchable';
import * as S from './styles';

type Props = TouchableOpacityProps & {
    item: CardItemProps
}

export const CardItem: React.FC<Props> = ({
    item,
    ...rest
}) => {
    const { id, color, title, image } = item
    return (
        <Touchable {...rest}>
            <S.Container color={color}>
                <SharedElement id={`item.${id}.title`}>
                    <CustomText color='white' margin='32px 0 15px 15px' size={16} weight='bold'>
                        {title}
                    </CustomText>
                </SharedElement>
                <Flex flex={1} justifyContent='center' alignItems='center'>
                    <SharedElement id={`item.${id}.photo`} style={{ width: '100%', height: 100 }}>
                        <S.CardImage source={image} resizeMode='contain' />
                    </SharedElement>
                </Flex>
            </S.Container>
        </Touchable >
    );
};