import DropMiniaturePNG from '../../assets/drop-miniature.png';
import WindMiniaturePNG from '../../assets/wind-miniature.png';
import RainingCloudPNG from '../../assets/raining-cloud-miniature.png';

const dataWeatherDescription = [
	{
		id: 1,
		icon: DropMiniaturePNG,
		value: '24%',
		text: 'Umidade',
	},

	{
		id: 2,
		icon: WindMiniaturePNG,
		value: '30km/h',
		text: 'Veloc. Vento',
	},

	{
		id: 3,
		icon: RainingCloudPNG,
		value: '76%',
		text: 'Chuva',
	},
];

export default dataWeatherDescription;
