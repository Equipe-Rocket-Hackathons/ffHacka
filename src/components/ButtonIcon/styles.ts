import { View } from 'react-native';
import styled from 'styled-components/native';
import { toAlpha } from '../../utils/toAlpha';

type ContainerProps = & {
   color?: string;
}

export const Container = styled(View) <ContainerProps>`
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius: 15px;
   width: 30px;
   height: 30px;
   background-color:  ${({ theme, color }) => toAlpha(theme.colors[color || 'gray'], 20)}
`