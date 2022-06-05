import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../global/theme';
import { CustomText } from '../CustomText';
import { Container } from './styles';

type Props = TouchableOpacityProps & {
    isFooter?: boolean;
    isOutline?: boolean;
    color?: keyof typeof theme.colors;
    children: ReactNode;
};

export const MainButton: React.FC<Props> = ({
    isFooter = false,
    isOutline = false,
    color = 'primary',
    children,
    ...rest
}) => {
    return (
        <Container isOutline={isOutline} color={color} isFooter={isFooter} activeOpacity={.9} {...rest}>
            <CustomText
                color={isOutline ? 'primary' : 'white'}
                weight='bold'
            >
                {children}
            </CustomText>
        </Container>
    );
};
