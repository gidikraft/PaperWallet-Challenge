import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { AppContext } from '../global/AppContext';
import { AppLanding, HomeScreen, ModalScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	const { isAuthenticated } = useContext(AppContext);
	return (
		<Stack.Navigator
			initialRouteName='AppLandingScreen'
		>
			{isAuthenticated ? (
				<>
					<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Gallery' }} />

					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="Modal" component={ModalScreen} />
					</Stack.Group>
				</>
			) : (
				<Stack.Screen
					name="AppLandingScreen"
					component={AppLanding}
					options={{
						headerShadowVisible: false,
						headerShown: false,
					}}
				/>

			)}

		</Stack.Navigator>
  )
};

export default RootNavigation;
