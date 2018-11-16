import { StyleSheet } from "react-native";

const unitOutputStyles = StyleSheet.create({
	button: {
		borderWidth: 2,
		borderColor: "#00ecff",
		backgroundColor: "#00ecff",
		borderRadius: 15,
		marginBottom: "1%",
	},
	unitListOption: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "3%",
		paddingBottom: "3%",
		paddingLeft: "10%",
		paddingRight: "10%",
	},
	unitProgressListOption: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "3%",
		paddingBottom: "3%",
		paddingLeft: "10%",
		paddingRight: "10%",
	},
	unitListOptionTitle: {
		fontFamily: 'Quite Magical - TTF',
		color: "#fff",
		fontSize: 55,
		fontWeight: "400",
	}
});

export default unitOutputStyles;
