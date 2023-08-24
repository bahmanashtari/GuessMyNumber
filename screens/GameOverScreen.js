import { StyleSheet } from 'react-native-web'

import { View, Text } from 'react-native'

const GameOverScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.message}>Game is Over!</Text>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		fontSize: 42,
		fontWeight: 'bold',
		color: 'white',
	},
})
