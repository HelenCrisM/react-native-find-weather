import { ImageSourcePropType } from "react-native";

export interface ICardHourTemperature {
	id: number;
	temperatureValue: number;
	icon: ImageSourcePropType;
	hour: string;
}
