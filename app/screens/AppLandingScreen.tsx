import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { RootStackParamList, RootStackScreenProps } from '../navigation/types';
import PrimaryButton from '../components/PrimaryButton';
import CustomInput from '../components/CustomInput';
import { View } from '../components/Themed';
import { AppContext } from '../global/AppContext';

const AppLandingScreen = ({ navigation }: RootStackScreenProps<keyof RootStackParamList>) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { isAuthenticated, setisAuthenticated } = useContext(AppContext);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// do something if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username))
			console.log('first', isAuthenticated)
		});

		return unsubscribe;
	}, [navigation]);

	const Login = () => {
		setisAuthenticated(true);
	};
  
	return (
    <SafeAreaView style={styles.maincontainer}>
			<View style={styles.container} >
				<View style={styles.inputcontainer} >
					<CustomInput
						title="Username"
						label="Enter username"
						value={username}
						onChangeText={text => setUsername(text)}
					/>

					<CustomInput
						title="Passoword"
						label="Enter password"
						value={password}
						onChangeText={text => setPassword(text)}
					/>

				</View>

				<View style={{ alignItems: "center", flex: 1 }}>
					<View style={styles.bottomView}>
						<PrimaryButton
							title='Login'
							buttonPress={Login}
						/>
					</View>
				</View>

			</View>
    </SafeAreaView>
  )
};

export default AppLandingScreen;

const styles = StyleSheet.create({
	maincontainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
	inputcontainer: {
		marginTop: 100
	},
	bottomView: {
		bottom: 30,
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
		position: "absolute",
	},
});
