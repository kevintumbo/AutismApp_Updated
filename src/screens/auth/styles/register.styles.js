import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
        alignItems: 'center',
	},
	inputView: {
		flexDirection: "column",
		height: "80%",
		width: "80%",
		marginBottom: "1%",
		marginTop: "5%",
	},
	header: {
		alignItems: "center",
		paddingTop: "2%",
		paddingBottom: "3%",
	},
	heading: {
		color: "#00ecff",
		fontSize: 70,
		fontWeight: "400",
		fontFamily: 'Quite Magical - TTF',
	},
	textInput: {
		width: "100%",
		marginBottom: "3%",
		fontSize: 45,
		color: "#000",
		borderBottomColor: "#00ecff",
		fontFamily: 'Quite Magical - TTF',
		borderBottomWidth: 1,
	},
	pageButtons: {
		flex: 1, 
		flexDirection: 'row',
		width: "100%",
		justifyContent:"space-evenly",
	},
	loginButton: {
		width: "40%",
		marginTop: "3.2%",
	},
	signUp: {
		color: "#000",
		width: "40%",
	},
	button: {
		backgroundColor: "#00ecff",
		alignItems: "center",
		width: "100%",
		borderRadius: 15,
		paddingTop: "5%",
		paddingBottom: "5%",
	},
	buttonText: {
		color: "#fff",
		fontSize: 35,
		fontFamily: 'Quite Magical - TTF',
	},
	text: {
		alignItems: "center",
		color: "#00ecff",
		fontSize: 35,
		fontFamily: 'Quite Magical - TTF',
	},
	errorText: {
		marginTop: 0,
		fontSize: 20,
		color: "#f00"
	},
	alertContainerStyle: {
		width: 275,
	}
});

export default styles;
