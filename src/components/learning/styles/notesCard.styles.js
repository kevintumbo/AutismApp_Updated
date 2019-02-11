import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from "../../../utility/dimensions";

const styles = StyleSheet.create({
	container: {
		width: widthPercentageToDP('100%'),
	},
	imageContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	images: {
		width: widthPercentageToDP('100%'),
	},
	noteContainer: {
		width: widthPercentageToDP('100%'),
	},
	note: {
		textAlign: 'center',
		fontSize: RF(9),
		fontWeight: "400",
		fontFamily: 'Quite Magical - TTF',
		color: "#00ecff",
	},
	buttonContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: "1%",
		marginBottom: "1%",
	},
	button: {
		width:  widthPercentageToDP('30%'),
		backgroundColor: "#00ecff",
		borderRadius: 15,
		paddingTop: "2%",
		paddingBottom: "2%",
		alignItems: "center",
	},
	buttonText: {
		fontFamily: 'Quite Magical - TTF',
		color: "#fff",
		fontWeight: "400",
		fontSize: RF(7),
		paddingBottom: "2%"
	},
});

export default styles;