import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SQLite from "react-native-sqlite-storage";
import RF from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import { selectUnit } from "../../store/modules/syllabus";
import unitStyles from "./styles/unitStyles.styles";

class UnitScreen extends Component {
	static navigatorStyle = {
		tabBarHidden: true,
	};

	static propTypes = {
		syllabus_selected: PropTypes.number.isRequired,
		selectedUnit: PropTypes.func.isRequired,
		navigation: PropTypes.object.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			units: [],
		};
	}

	async componentDidMount() {
		const db = SQLite.openDatabase(
			{ name: "app.db", createFromLocation: "~app.db" },
			this.openCB, this.successCB(), this.errorCB,
		);
		await db.transaction((tx) => {
			tx.executeSql(`SELECT * FROM units WHERE syllabus_id = ${this.props.syllabus_selected}`, [], (tx, results) => {
				// Get rows with Web SQL Database spec compliance.
				const len = results.rows.length;
				for (let i = 0; i < len; i += 1) {
					const row = results.rows.item(i);
					this.setState(prevState => ({ units: prevState.units.concat(row) }));
				}
			});
		});
	}

	onSelectUnit = (unitId) => {
		this.props.selectedUnit(unitId);
		this.props.navigation.navigate('question');
	};

	errorCB = (err) => {
		console.log(`SQL Error: ${err}`);
	}

	successCB = () => {
		console.log("SQL executed fine");
	}

	openCB = () => {
		console.log("Database OPENED");
	}

	renderItem = ({item}) => (
		<ListItem
			key={item.id}
			title={item.unit_name}
			onPress={() => this.onSelectUnit(item.id)}
			titleStyle={{ fontFamily: 'Quite Magical - TTF',
				color: "#fff",
				fontSize: RF(8),
				fontWeight: "400" 
			}}
			containerStyle={{
				borderWidth: 2,
				borderColor: "#fff",
				backgroundColor: "#00ecff",
				borderRadius: 15,
			}}
			leftIcon={
				<Icon
					name="book"
					size={35}
					color="#fff"
				/>
			}
			rightIcon={
				<Icon
					name="chevron-right"
					size={35}
					color="#fff"
				/>
			}
		/>
	)


	render() {
		return (
		<View style={unitStyles.container}>
			<View style={unitStyles.unitList}>
				<FlatList
					data={this.state.units}
					renderItem={this.renderItem}
					onEndReachedThreshold={0.5}
					keyExtractor={item => item.unit_name}
				/>
			</View>
		</View>
		)
	}
}

const mapStateToProps = state => ({
	syllabus_selected: state.syllabusReducer.syllabus.selected_syllabus,
});

const mapDispatchToProps = dispatch => ({
	selectedUnit: (unitId) => {
		dispatch(selectUnit(unitId));
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(UnitScreen);
