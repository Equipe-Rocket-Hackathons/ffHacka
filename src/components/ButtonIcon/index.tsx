import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../global/theme';
import { CustomIcon } from '../CustomIcon';
import { Touchable } from '../Touchable';
import { Container } from './styles'

type Props = TouchableOpacityProps & {
   color?: keyof typeof theme.colors;
   icon: string;
}

export const ButtonIcon: React.FC<Props> = ({ color, icon, ...rest }) => {
   return (
      <Touchable {...rest} >
         <Container color={color}>
            <CustomIcon name={icon} color="white" />
         </Container>
      </Touchable>
   );
};