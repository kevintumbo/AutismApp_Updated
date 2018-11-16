import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from "../../../utility/dimensions";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
        alignItems: 'center',
	},
	inputView: {
		flexDirection: "column",
		height: heightPercentageToDP('90%'),
		width: widthPercentageToDP('80%'),
		marginBottom: "1%",
		marginTop: "3%",
	},
	header: {
		alignItems: "center",
		paddingBottom: "3%",
	},
	heading: {
		color: "#00ecff",
		fontSize: RF(12),
		fontWeight: "400",
		fontFamily: 'Quite Magical - TTF',
	},
	textInput: {
		width: "100%",
		marginBottom: "1%",
		fontSize: RF(6),
		color: "#000",
		borderBottomColor: "#00ecff",
		fontFamily: 'Quite Magical - TTF',
		borderBottomWidth: 1,
	},
	pageButtons: {
		flex: 1, 
		flexDirection: 'row',
		marginTop: "1%",
		width: "100%",
		justifyContent:"space-evenly",
	},
	loginButton: {
		width: "40%",
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
		fontSize: RF(6),
		fontFamily: 'Quite Magical - TTF',
	},
	text: {
		alignItems: "center",
		color: "#00ecff",
		fontSize: RF(7),
		fontFamily: 'Quite Magical - TTF',
	},
	errorText: {
		marginTop: 0,
		fontSize: RF(4),
		color: "#f00"
	},
	alertContainerStyle: {
		width: 275,
	}
});

export default styles;
