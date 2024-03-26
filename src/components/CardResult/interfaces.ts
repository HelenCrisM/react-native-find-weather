import { TouchableOpacityProps } from "react-native";

export interface ICardResult {
	location: {
		name: string;
		region: string;
		country: string;
	};
	current: {
		temp_c: number;
	};
	condition: {
		text: string;
		icon: string;
	};
}

export interface ICardResultData extends TouchableOpacityProps {
	data: ICardResult;
}
