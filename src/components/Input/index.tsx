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
                size={11}
                weight='bold'
                color='text'
                opacity={.5}
                margin='0 0 8px 0'
            >
                {label}
            </CustomText>
            <S.Container>
                <S.Input {...rest} />
            </S.Container>

        </>
    );
};