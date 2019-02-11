import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RF from "react-native-responsive-fontsize";

const SuccessModal = props => (
	<Modal
		visible={props.modalVisible}
		animationType="slide"
		onRequestClose={() => props.closeModal}
	>
		<View style={successModalStyle.container}>
			<Text style={successModalStyle.text}>
				Correct. That Is The Right Answer
			</Text>

			<Icon
				name="check"
				size={100}
				color="#42f442"
			/>
			<View style={successModalStyle.buttonContainer}>
				<Button
					style={successModalStyle.button}
					title="Repeat Question"
					onPress={props.closeModal}
				/>

				<Button
					style={successModalStyle.button}
					title="Next Question"
					onPress={props.nextQuestion}
				/>
			</View>
		</View>
	</Modal>
);

const successModalStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "400",
        fontSize: RF(12),
		fontFamily: 'Quite Magical - TTF',
	},
	buttonContainer: {
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-around",
		marginTop: "2%",
	},
});

export default SuccessModal;
