import PrimaryButton from './componenets/PrimaryButton'

import { TextInput, View } from 'react-native'

const StartGameScreen = () => {
	return (
		<View>
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	)
}

export default StartGameScreen
