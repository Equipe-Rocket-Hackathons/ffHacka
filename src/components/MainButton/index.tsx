import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CustomText } from '../CustomText';
import { Container } from './styles';

type Props = TouchableOpacityProps & {
    isFooter?: boolean;
    isOutline?: boolean;
    children: ReactNode;
};

export const MainButton: React.FC<Props> = ({
    isFooter = false,
    isOutline = false,
    children,
    ...rest
}) => {
    return (
        <Container isOutline={isOutline} isFooter={isFooter} activeOpacity={.9} {...rest}>
            <CustomText
                color={isOutline ? 'primary' : 'white'}
            >
                {children}
            </CustomText>
        </Container>
    );
};
