import { useState } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
	const [showGameScreen, setShowGameScreen] = useState(false)

	const showGameScreenHandler = () => {
		setShowGameScreen(true)
	}

	return (
		<LinearGradient
			colors={['#4e0329', '#ddb52f']}
			style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}>
				{!showGameScreen && (
					<StartGameScreen onShowGameScreen={showGameScreenHandler} />
				)}
				{showGameScreen && <GameScreen />}
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
