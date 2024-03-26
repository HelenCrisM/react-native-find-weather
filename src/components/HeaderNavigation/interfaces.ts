import { TouchableOpacityProps } from "react-native";

export interface IHeaderNavigation extends TouchableOpacityProps {
	titlePage: string;
	icon?: React.ReactNode;
}
