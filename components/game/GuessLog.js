import { useState, useEffect } from 'react'

import { Text, View, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

const GuessLog = ({ children }) => {
	const [roundNumber, setRoundNumber] = useState(1)

	useEffect(() => {
		setRoundNumber(curr => curr + 1)
	})

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.roundNumber}>{roundNumber}</Text>
			</View>
			<View>
				<Text style={styles.guess}>{children}</Text>
			</View>
		</View>
	)
}

export default GuessLog

const styles = StyleSheet.create({
	container: {
		flex: 'row',
	},
	guess: {
		fontSize: 18,
		color: Colors.accent500,
	},
	roundNumber: {},
})
