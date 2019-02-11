import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";

const syllabusProgressListStyles = StyleSheet.create({
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
		alignItems: "center",
		paddingTop: "1%",
		paddingBottom: "1.5%",
	},
	syllabusListOptionTitle: {
		fontFamily: 'Quite Magical - TTF',
		color: "#fff",
		fontSize: RF(6),
		fontWeight: "400",
	}
});

export default syllabusProgressListStyles;
