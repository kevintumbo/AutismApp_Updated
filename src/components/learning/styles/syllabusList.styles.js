import { StyleSheet } from "react-native";

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
		color: "#fff",
		fontSize: 25,
		fontWeight: "500",
	}
});

export default syllabusOutputStyles;
