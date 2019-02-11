import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from "../../../utility/dimensions";

const questionStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	list: {
		flexDirection: "column",
		height: heightPercentageToDP('100%'),
		width: widthPercentageToDP('90%'),
		marginTop: "2%",
		alignItems: "center",
	},
});

export default questionStyles;
