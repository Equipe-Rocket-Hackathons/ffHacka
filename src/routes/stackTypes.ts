import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	BuildingsList: undefined;
	BuildingFilters: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList { }
	}
}