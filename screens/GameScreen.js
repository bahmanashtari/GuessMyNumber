import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

import Title from '../components/Title'

const GameScreen = () => {
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
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
