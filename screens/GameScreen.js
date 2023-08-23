import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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

const GameScreen = ({ pickedNumber }) => {
	const initialGuess = generateRandomBetween(1, 100, pickedNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	const higherPressHandler = () => {
		const newGuess = generateRandomBetween(
			currentGuess,
			100,
			currentGuess - 1
		)
		setCurrentGuess(newGuess)
	}

	const lowerPressHandler = () => {
		const newGuess = generateRandomBetween(
			1,
			currentGuess,
			currentGuess + 1
		)
		setCurrentGuess(newGuess)
	}

	let section = (
		<>
			<Title>Opponent's Guess</Title>
			<NumbersContainer>{currentGuess}</NumbersContainer>
			<View>
				<Text>Higher or Lower</Text>
				<PrimaryButton onPress={higherPressHandler}>+</PrimaryButton>
				<PrimaryButton onPress={lowerPressHandler}>-</PrimaryButton>
			</View>
		</>
	)
	if (currentGuess === pickedNumber) {
		section = (
			<Text>
				`You Won! Picked Number: ${pickedNumber} Current Guess: $
				{currentGuess}`
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
