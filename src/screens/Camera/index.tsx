import { useNavigation } from '@react-navigation/native';
import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ButtonIcon } from '../../components/ButtonIcon';
import { MainButton } from '../../components/MainButton';
import { Container } from './styles';
import { Camera as RNCamera } from 'expo-camera';
import { CustomText } from '../../components/CustomText';

export const Camera: React.FC = () => {
    const { navigate, goBack, setOptions } = useNavigation()
    const cameraRef = useRef<RNCamera>(null)
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <ButtonIcon icon='close' onPress={goBack} />
            ),
            headerRightContainerStyle: {
                paddingRight: 22
            }
        })
    }, [])

    useEffect(() => {
        (async () => {
            const { status } = await RNCamera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        return () => setLoading(false)
    }, []);

    const handleCaptureCamera = useCallback(async () => {
        setLoading(true)
        const photo = await cameraRef.current?.takePictureAsync()
        setLoading(false)
        navigate('FormItem', { photo })
    }, [])

    if (hasPermission === false) {
        return <CustomText>No access to camera</CustomText>;
    }

    return (
        <Container>
            <StatusBar style='light' />
            <RNCamera ref={cameraRef} style={{ flex: 1 }} />
            <MainButton isFooter loading={loading} disabled={loading} onPress={handleCaptureCamera}>
                Capturar e continuar
            </MainButton>
        </Container>
    );
};