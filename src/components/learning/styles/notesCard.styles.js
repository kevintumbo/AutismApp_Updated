import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from "../../../utility/dimensions";

const styles = StyleSheet.create({
	container: {
		width: widthPercentageToDP('100%'),
	},
	notesContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "3%",
    },
    images: {
		width: widthPercentageToDP('21%'),
		height: widthPercentageToDP('21%'),
	},
    notes: {
		fontSize: RF(12),
		fontWeight: "400",
		fontFamily: 'Quite Magical - TTF',
		color: "#00ecff",
		marginTop: "5%",
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
});

export default styles;