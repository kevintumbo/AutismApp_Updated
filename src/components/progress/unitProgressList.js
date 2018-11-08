import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import Icon from "react-native-vector-icons/FontAwesome";
import unitOutputStyles from "../../components/learning/styles/unitList.styles";

const UnitProgressListOutput = props => (
	<TouchableOpacity style={unitOutputStyles.button}>
		<View style={unitOutputStyles.unitProgressListOption}>
			<Icon
				name="book"
				size={35}
				color="#fff"
			/>
			<Text style={unitOutputStyles.unitListOptionTitle}>
				{props.unit}
			</Text>
			<ProgressCircle
				percent={props.progress}
				radius={30}
				borderWidth={5}
				color="#3399FF"
				shadowColor="#999"
				bgColor="#fff"
			>
				<Text style={{ fontSize: 18 }}>{`${props.progress}%`}</Text>
			</ProgressCircle>
		</View>
	</TouchableOpacity>
);

export default UnitProgressListOutput;
