import React from 'react';
import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_800ExtraBold,
  Mulish_900Black,
} from '@expo-google-fonts/mulish';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/global/theme';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['expo-app-loading is deprecated'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_800ExtraBold,
    Mulish_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
