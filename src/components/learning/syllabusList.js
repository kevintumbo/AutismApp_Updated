import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import syllabusOutputStyles from "./styles/syllabusList.styles";

const SyllabusOutput = props => (
	<TouchableOpacity 
		onPress={props.onPress} 
		style={syllabusOutputStyles.button}
	>
		<View style={syllabusOutputStyles.syllabusListOption}>
			<Icon
				name="book"
				size={35}
				color="#fff"
			/>
			<Text style={syllabusOutputStyles.syllabusListOptionTitle}>
				{props.syllabus.syllabus_name}
			</Text>
			<Icon
				name="chevron-right"
				size={35}
				color="#fff"
			/>
		</View>
	</TouchableOpacity>
);

export default SyllabusOutput;
