import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/navigation';
import useColorScheme from './app/hooks/useColorScheme';
import { AppContextProvider } from './app/global/AppContext';

export default function App() {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaProvider>
			<AppContextProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</AppContextProvider>
		</SafeAreaProvider>
	);
}
