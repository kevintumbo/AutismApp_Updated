import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import unitStyles from "../learning/styles/unitStyles.styles";
import { getUnitProgressAction } from "../../store/modules/progress";
import UnitProgressListOutput from "../../components/progress/unitProgressList";


class UnitProgressScreen extends Component {
	static propTypes = {
		userId: PropTypes.number.isRequired,
		selectedSyllabus: PropTypes.number.isRequired,
		getUnitProgressAction: PropTypes.func.isRequired,
		unitsProgress: PropTypes.array,
	};

	static defaultProps = {
		unitsProgress: [],
	}

	async componentDidMount() {
		await this.props.getUnitProgressAction(this.props.selectedSyllabus, this.props.userId);
	}

	showList = () =>  {
		this.setState({loading: 'false'});
	}

	render() {
		const list = this.props.unitsProgress.map(unit => (
			<UnitProgressListOutput
				key={unit.unit_id}
				unit={unit.unit_name}
				progress={unit.Progress}
			/>
		));
			return (
			<View style={unitStyles.container}>
				<View style={unitStyles.unitList}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						{list}
					</ScrollView>
				</View>
			</View>
			);
		}
	}

const mapStateToProps = state => ({
	userId: state.authReducer.auth.id,
	selectedSyllabus: state.syllabusProgressReducer.syllabus.selectedSyllabus,
	unitsProgress: state.syllabusProgressReducer.syllabus.selectedUnitProgress,
});

const mapDispatchToProps = {
	getUnitProgressAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitProgressScreen);
