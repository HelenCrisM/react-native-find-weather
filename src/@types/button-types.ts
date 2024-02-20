import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export interface IButton extends TouchableOpacityProps {
	children: ReactNode;
	backgroundColor: string;
	borderColor?: string;
	borderRadius: number;
	height: number;
}
