import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import unitOutputStyles from "./styles/unitList.styles";

const UnitOutput = props => (
	<TouchableOpacity onPress={props.onPress} style={unitOutputStyles.button}>
		<View style={unitOutputStyles.unitListOption}>
			<Icon
				name="book"
				size={35}
				color="#fff"
			/>
			<Text style={unitOutputStyles.unitListOptionTitle}>
				{props.unit.unit_name}
			</Text>
			<Icon
				name="chevron-right"
				size={35}
				color="#fff"
			/>
		</View>
	</TouchableOpacity>
);

export default UnitOutput;
