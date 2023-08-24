import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import NumbersContainer from '../components/Game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

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

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessCount, setGuessCount] = useState(0)

	useEffect(() => {
		minBoundary = 1
		maxBoundary = 100
	}, [])

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessCount)
		}
	}, [currentGuess, userNumber, onGameOver])

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
		setGuessCount(currGuessCount => currGuessCount + 1)
		setCurrentGuess(newRndNumber)
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumbersContainer>{currentGuess}</NumbersContainer>
			<Card>
				<InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('greater')}>
							<Ionicons name='md-add' size={24} color='white' />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={() => nextGuessHandler('lower')}>
							<Ionicons name='md-remove' size={24} color='white' />
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	instructionText: {
		marginBottom: 12,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
})
