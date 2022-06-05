import React from 'react';
import { CustomIcon } from '../CustomIcon';
import { CustomText } from '../CustomText';
import { Flex } from '../Flex';
import * as S from './styles';

type Props = {
    item: {
        title: string;
        image: string;
    }
}

export const Item: React.FC<Props> = ({
    item
}) => {
    const { image, title } = item
    return (
        <S.Container>
            <Flex flexDirection='row' alignItems='center'>
                <S.Image source={{ uri: image }} />
                <CustomText margin='0 0 0 20px' size={16} color='text' weight='bold'>{title}</CustomText>
            </Flex>
            <CustomIcon name='keyboard-arrow-right' size={30} color='text' />
        </S.Container>
    );
};