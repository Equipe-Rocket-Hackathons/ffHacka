import * as S from './styles';
import { CustomText } from '../CustomText';
import { TextInputProps } from 'react-native';


type InputProps = TextInputProps & {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <>
            <CustomText
                size={12}
            >
                {label}
            </CustomText>
            <S.Container>

                <S.Input />
            </S.Container>

        </>
    );
};