import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const getStatusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const Container = styled.SafeAreaView`
	margin-top: ${getStatusBarHeight}px;
`;

const ContainerEmptyState = styled.View`
	align-items: center;
`;


export default {
	Container,
	ContainerEmptyState,
};
