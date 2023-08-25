import { Text, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

const GuessLog = ({ children }) => {
	return <Text style={styles.textOutput}>{children}</Text>
}

export default GuessLog

const styles = StyleSheet.create({
	textOutput: {
		fontSize: 18,
		color: Colors.accent500,
	},
})
