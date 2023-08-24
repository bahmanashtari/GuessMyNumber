import { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

import Title from '../components/ui/Title'
import NumbersContainer from '../components/Game/NumberContainer'

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Do't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			])
			return
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}

		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		setCurrentGuess(newRndNumber)
	}

	let section = (
		<>
			<Title>Opponent's Guess</Title>
			<NumbersContainer>{currentGuess}</NumbersContainer>
			<View>
				<Text>Higher or Lower</Text>
				<View>
					<PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
				</View>
			</View>
		</>
	)
	if (currentGuess === userNumber) {
		section = (
			<Text>
				`You Won! Picked Number: ${userNumber} Current Guess: ${currentGuess}`
			</Text>
		)
	}

	return (
		<View style={styles.screen}>
			{section}
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
