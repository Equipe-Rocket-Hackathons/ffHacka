import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%;
`;

export const ButtonSection = styled.View`
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 136px;
   margin: 25px 0 0 0;
`;

export const NewRegisterImage = styled.Image`
  width: ${width}px;
  margin-top: 70px;
`;

