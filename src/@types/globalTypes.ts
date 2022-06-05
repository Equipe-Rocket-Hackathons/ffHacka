import { ImageSourcePropType } from "react-native";
import { theme } from "../global/theme";

export type CardItemProps = {
    id: number;
    title: string;
    color: keyof typeof theme.colors;
    subTitle: string;
    image: ImageSourcePropType
}