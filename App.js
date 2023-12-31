import { useState } from 'react'
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState()
	const [gameIsOver, setGameIsOver] = useState(true)
	const [guessCount, setGuessCount] = useState(0)

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	const pickedNumberHandler = pickedNumber => {
		setUserNumber(pickedNumber)
		setGameIsOver(false)
	}

	const gameOverHandler = guessCountNumber => {
		setGuessCount(guessCountNumber)
		setGameIsOver(true)
	}

	const startNewGameHandler = () => {
		setUserNumber(null)
		setGuessCount(0)
	}

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />
	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
	}
	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				guessCount={guessCount}
				userNumber={userNumber}
				onStartNewGame={startNewGameHandler}
			>
				Game is Over!
			</GameOverScreen>
		)
	}

	return (
		<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
})
