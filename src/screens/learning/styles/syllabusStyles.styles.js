import { StyleSheet } from "react-native";

const syllabusStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		// backgroundColor: "#00ecff",
		paddingBottom: "5%",
	},
	syllabusList: {
		flexDirection: "column",
		height: "80%",
		width: "70%",
		marginTop: "2%",
		marginBottom: "5%",
	},
	syllabusListHeader: {
		alignItems: "center",
		paddingTop: "3%",
		paddingBottom: "3%",
	},
	syllabusListHeaderText: {
		fontSize: 50,
		color: "#00ecff",
		fontWeight: "bold",
	},
	syllabusListOption: {
		alignItems: "stretch",
	},
});

export default syllabusStyles;
