import { useState, useEffect } from 'react'

import { Text, View, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

const GuessLog = ({ children }) => {
	const [roundNumber, setRoundNumber] = useState(0)

	useEffect(() => {
		setRoundNumber(curr => curr + 1)
	}, [])

	return (
		<View style={styles.mainContainer}>
			<View style={styles.subContainer}>
				<Text style={styles.roundNumber}>{roundNumber}</Text>
			</View>
			<View style={styles.subContainer}>
				<Text style={styles.guess}>{children}</Text>
			</View>
		</View>
	)
}

export default GuessLog

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
	},
	subContainer: {
		flex: 1,
	},
	guess: {
		fontSize: 18,
		color: Colors.accent500,
	},
	roundNumber: {
		fontSize: 16,
		color: 'white',
	},
})
