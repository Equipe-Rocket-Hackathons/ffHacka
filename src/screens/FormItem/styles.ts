import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get("window")

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight() + width / 6}px;
`;

export const Content = styled.View`
    padding: 0 22px 0 22px;
`;

export const InputContainer = styled.View`
    padding: 0 0 24px 0;
`;
