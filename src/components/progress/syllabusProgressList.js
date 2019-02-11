import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import Icon from "react-native-vector-icons/FontAwesome";
import syllabusProgressListStyles from "./styles/syllabusProgressListStyles";

const syllabusProgressListOutput = props => (
	<TouchableOpacity 
		onPress={props.onPress} 
		style={syllabusProgressListStyles.button}
	>
		<View style={syllabusProgressListStyles.syllabusListOption}>
			<Icon
				name="book"
				size={35}
				color="#fff"
			/>
			<Text style={syllabusProgressListStyles.syllabusListOptionTitle}>
				{props.syllabus}
			</Text>
			<ProgressCircle
				percent={props.progress}
				radius={30}
				borderWidth={5}
				color="#3399FF"
				shadowColor="#999"
				bgColor="#fff"
			>
				<Text style={{ fontSize: 20 }}>{`${props.progress}%`}</Text>
			</ProgressCircle>
			<Icon
				name="chevron-right"
				size={35}
				color="#fff"
			/>
		</View>
	</TouchableOpacity>
);

export default syllabusProgressListOutput;
