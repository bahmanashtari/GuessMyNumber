import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const GameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<View>
				<Text>Higher or Lower</Text>
				<PrimaryButton>+</PrimaryButton>
				<PrimaryButton>-</PrimaryButton>
			</View>
			<View>
				<Text>Log Rounds</Text>
			</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
})
