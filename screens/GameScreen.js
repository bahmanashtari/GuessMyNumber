import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const GameScreen = ({ onClose }) => {
	return (
		<View style={styles.gameScreenContainer}>
			<Text>Game Screen!</Text>
			<PrimaryButton onPress={onClose}>Close</PrimaryButton>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	gameScreenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
