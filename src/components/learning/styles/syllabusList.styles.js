import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";

const syllabusOutputStyles = StyleSheet.create({
	button: {
		borderWidth: 2,
		borderColor: "#00ecff",
		backgroundColor: "#00ecff",
		borderRadius: 15,
		marginBottom: "1%",
	},
	syllabusListOption: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingTop: "3%",
		paddingBottom: "3%",

	},
	syllabusListOptionTitle: {
		fontFamily: 'Quite Magical - TTF',
		color: "#fff",
		fontSize: RF(6),
		fontWeight: "400",
	}
});

export default syllabusOutputStyles;
