import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	questionContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "3%",
	},
	question: {
		fontSize: 35,
		fontWeight: "bold",
		color: "#00ecff",
	},
	buttonAndImageContainer:{
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "2%",
	},
	buttonAndImageContainer1: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "50%",
	},
	buttonAndImageContainer2: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "50%",
	},
	button: {
		width: "50%",
		backgroundColor: "#00ecff",
		borderRadius: 15,
		paddingTop: "3%",
		paddingBottom: "3%",
		alignItems: "center",
		marginBottom: "1%",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 25,
	},
	// imageContainer: {
	// 	flexDirection: "row",
	// 	justifyContent: "space-around",
	// 	marginTop: "1%",
	// 	width: "100%",
	// },
});

export default styles;
