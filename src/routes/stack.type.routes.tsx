import { IForecastDay } from "../screens/Next5Days/interfaces";
import { IForecastData } from "../screens/Search/interfaces";

export type IStackRoutes = {
	Welcome: undefined;
	TabRoutes: undefined;
	Home: undefined;
	Search: undefined;
	Next5Days: {
		forecast: {
			forecastday: Array<IForecastData>;
		};
		forecast5Days: Array<IForecastDay>;
	};
};
