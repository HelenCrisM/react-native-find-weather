import { TextProps } from "react-native";

export interface IText extends TextProps {
	children: React.ReactNode;
	fontSize: number;
	fontFamily: string;
	color: string;
	textAlign?: 'center' | 'right' | 'left';
}
