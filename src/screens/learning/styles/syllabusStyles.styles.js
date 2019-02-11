import { StyleSheet } from "react-native";
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from "../../../utility/dimensions";

const syllabusStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		paddingBottom: "5%",
	},
	syllabusList: {
		flexDirection: "column",
		height: heightPercentageToDP('100%'),
		width: widthPercentageToDP('80%'),
		marginTop: "2%",
		marginBottom: "5%",
	},
	syllabusListHeader: {
		alignItems: "center",
		paddingTop: "3%",
		paddingBottom: "3%",
	},
	syllabusListHeaderText: {
		fontFamily: 'Quite Magical - TTF',
		fontSize: RF(12),
		color: "#00ecff",
		fontWeight: "400",
	},
	syllabusListOption: {
		alignItems: "stretch",
	},
});

export default syllabusStyles;
