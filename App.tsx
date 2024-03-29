import { StatusBar } from 'expo-status-bar';

import {
	useFonts,
	Overpass_300Light,
	Overpass_400Regular,
	Overpass_600SemiBold,
	Overpass_700Bold,
} from '@expo-google-fonts/overpass';
import Routes from './src/routes/routes';
import theme from './src/theme';
// import Welcome from './src/screens/Welcome';

export default function App() {
	const [fontsLoaded] = useFonts({
		Overpass_300Light,
		Overpass_400Regular,
		Overpass_600SemiBold,
		Overpass_700Bold,
	});

	if (!fontsLoaded) {
		return;
	}

	return (
		<>
			<StatusBar style="light" backgroundColor={theme.colors.dark} />

			<Routes />
		</>
	);
}
