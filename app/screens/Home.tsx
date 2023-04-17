import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { hp, wp } from '../constants/layout';
import { palette } from '../constants/Colors';

const Home = () => {
	const [cameraOpen, setOpenCamera] = useState(false);

	const openCamera = () => {
		// setOpenCamera(true)
		console.log(cameraOpen)
	}
	return (
		<View style={styles.maincontainer}>
			<View style={styles.container} >
				<TouchableOpacity
					style={styles.floatingbutton}
					onPress={() => {
						openCamera();
					}}>
					{/* <Scan /> */}
					<Text >OF</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	maincontainer: {
		flex: 1,
		backgroundColor: palette.background,
	},
	container: {
		flex: 1,
		paddingHorizontal: 24,
	},
	floatingbutton: {
		position: 'absolute',
		bottom: 80,
		right: 40,
		backgroundColor: palette.buttonGreen,
		width: wp(45),
		height: hp(45),
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
});
