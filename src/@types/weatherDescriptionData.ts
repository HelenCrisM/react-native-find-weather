import { ImageSourcePropType } from "react-native";

export interface IWeatherDescriptionData {
	id: number;
	icon: ImageSourcePropType;
	value: string;
	text: string;
}