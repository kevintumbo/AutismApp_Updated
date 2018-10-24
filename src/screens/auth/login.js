import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import validator from "../../utility/validation";
import logStyles from "./styles/login.styles";
import { loginUserAction } from "../../store/modules/auth";

class LoginScreen extends Component {
	static propTypes = {
		loginUserAction: PropTypes.func.isRequired,
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

	static getDerivedStateFromProps(props, state) {
        if(props.isAuthenticated) {
            props.navigation.navigate('syllabus');
        }
        return null;
    }

	signUp = () => {
		this.props.navigation.navigate('signUp')
	};

	login = () => {
		const nameToCheck = this.state.name.value;
		const passwordToCheck = this.state.password.value;
		this.props.loginUserAction(nameToCheck, passwordToCheck);
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
				<View style={logStyles.inputView}>
					<Text style={logStyles.heading}>
						Autism Learning App
					</Text>
					<TextInput
						style={logStyles.textInput}
						placeholder="Username"
						value={this.state.name.value}
						onChangeText={val => this.updateInputState("name", val)}
					/>
					<TextInput
						style={logStyles.textInput}
						placeholder="Password"
						value={this.state.password.value}
						onChangeText={val => this.updateInputState("password", val)}
					/>
				</View>
				<View style={logStyles.pageButtons}>
					<View style={logStyles.signUp}> 
						<Text style={logStyles.text}>
							Don't have an account?
						</Text>
						<TouchableOpacity
							onPress={this.signUp}
							style={logStyles.button}
						>
							<Text style={logStyles.buttonText}> Create An Account </Text>
						</TouchableOpacity>
					</View>
					<View style={logStyles.loginButton}> 
						<TouchableOpacity
							onPress={this.login}
							style={logStyles.button}
						>
							<Text style={logStyles.buttonText}> Log In </Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.authReducer.auth.isAuthenticated,
	message: state.authReducer.auth.message,
    errorMessage: state.authReducer.auth.errorMessage,
})

const mapDispatchToProps = dispatch =>({
	loginUserAction: (name, password) => dispatch(loginUserAction(name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
