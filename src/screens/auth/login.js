import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import validator from "../../utility/validation";
import logStyles from "./styles/login.styles";
import { loginUser } from "../../store/modules/auth";

class LoginScreen extends Component {
	static propTypes = {
		loginUser: PropTypes.func.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			name: {
				value: "",
				valid: false,
				validationRules: {
					isName: true,
				},
			},
			password: {
				value: "",
				valid: false,
				validationRules: {
					minLength: 6,
				},
			},
			showAlert: false,
		};
	}

	updateInputState = (key, value) => {
		this.setState(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				value,
				valid: validator(value, prevState[key].validationRules),
			},
		}
		));
	};

	signUp = () => {
		this.props.navigation.navigate('signUp')
	};

	login = () => {
		const nameToCheck = this.state.name.value;
		const passwordToCheck = this.state.password.value;
		this.props.loginUser(nameToCheck, passwordToCheck);
	};

	showAlert = () => {
		this.setState({
			showAlert: true,
		});
	};

	hideAlert = () => {
		this.setState({
			showAlert: false,
		});
	};

	render() {
		return (
			<View style={logStyles.container}>
				<Text style={logStyles.heading}>
					Autism Learning App
				</Text>
				<View style={logStyles.inputView}>
					<TextInput
						style={logStyles.textInput}
						placeholder="John Smith"
						value={this.state.name.value}
						onChangeText={val => this.updateInputState("name", val)}
					/>
					<TextInput
						style={logStyles.textInput}
						placeholder="Password"
						value={this.state.password.value}
						onChangeText={val => this.updateInputState("password", val)}
					/>
					<Button
						onPress={this.login}
						style={logStyles.loginButton}
						title="Log In"
					/>
				</View>
				<View style={logStyles.createAccount}>
					<Text style={logStyles.text}>
						Don't have an account?
					</Text>
					<Text style={logStyles.text}>
						Click Below to create an account.
					</Text>
					<Button
						onPress={this.signUp}
						style={logStyles.button}
						title="Create An Account"
					/>
				</View>

			</View>
		);
	}
}

const mapDispatchToProps = {
	loginUser,
};

export default connect(null, mapDispatchToProps)(LoginScreen);
