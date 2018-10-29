import { StyleSheet } from "react-native";

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
		color: "#fff",
		fontSize: 25,
		fontWeight: "500",
	}
});

export default syllabusProgressListStyles;
