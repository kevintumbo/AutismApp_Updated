import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, TouchableOpacity, View, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";
import validate from "../../utility/formValidation";
import logStyles from "./styles/login.styles";
import { loginUserAction, logoutAction, clearErrors } from "../../store/modules/auth";

class LoginScreen extends Component {
	static propTypes = {
		loginUserAction: PropTypes.func.isRequired,
		errorMessage: PropTypes.string,
	}

	static defaultProps = {
		errorMessage: '',
	}
	constructor(props) {
		super(props);
		this.state = {
			username: '',
            usernameError: '',
			password: '',
			passwordError: '',
		};
	}

	showAlert = message => {
		Alert.alert(
			'Error logging in.',
			message,
			
			[
				{
				  text: 'Ok',
				  onPress: () => this.props.clearErrors(),
				},
			],
		);
	}

	updateInputState = (key, value) => {
        this.setState(prevState => ({
            ...prevState,
            [key]: value,
        }));
	};

	componentDidMount() {
		this.clearInput();
	}

	componentDidUpdate(prevProps) {
		console.log(this.props.errorMessage);
		if (this.props.errorMessage !== prevProps.errorMessage && this.props.errorMessage !== null && this.props.errorMessage !== '') {
			this.showAlert(this.props.errorMessage);
		}
        if(this.props.isAuthenticated) {
			this.props.navigation.navigate('drawerStack', {},  {
				type: "Navigate",
				routeName: "syllabus",
				params: { name: this.props.name, signOut: () => {
					Alert.alert(   // Shows up the alert without redirecting anywhere
						'Confirmation required'
						,'Do you really want to logout?'
						,[
						  {text: 'Accept', onPress: () => { 
								this.props.logout();
								this.props.navigation.navigate('login');
						  }},
						  {text: 'Cancel'}
						 ]
					);
				}}
			  });
		}
    }

	signUp = () => {
		this.props.navigation.navigate('signUp')
	};

	login = () => {
		const usernameError = validate('username', this.state.username);
		const passwordError = validate('password', this.state.password);

		this.setState({
            usernameError: usernameError,
            passwordError: passwordError,
		})

		if (!usernameError && !passwordError) {
            const username = this.state.username;
			const password = this.state.password;
			this.props.loginUserAction(username, password);
        }
	};

	clearInput = () => {
		this.setState({
			username: '',
            usernameError: '',
			password: '',
			passwordError: '',
		})
	}

	render() {
		return (
			<KeyboardAwareScrollView
			contentContainerStyle={logStyles.container}
			enableOnAndroid={true}>
					<View style={logStyles.inputView}>
						<View style={logStyles.header}>
							<Text style={logStyles.heading}>
								Autism Learning App
							</Text>
						</View>
						<View>
							<TextInput
								style={logStyles.textInput}
								placeholder="Username"
								value={this.state.username}
								onChangeText={val => this.updateInputState("username", val)}
								onBlur={() => {
									this.setState({
										usernameError: validate('username', this.state.username)
									})
								}}
							/>
							<Text style={logStyles.errorText}>{this.state.usernameError}</Text>
							<TextInput
								style={logStyles.textInput}
								placeholder="Password"
								value={this.state.password}
								onChangeText={val => this.updateInputState("password", val)}
								secureTextEntry={true}
								onBlur={() => {
									this.setState({
	 									passwordError: validate('password', this.state.password)	
									})
								}}
							/>
							<Text style={logStyles.errorText}>{this.state.passwordError}</Text>
						</View>
						<View>
							<Text style={logStyles.text}>
								Don't have an account?
							</Text>
						</View>
						<View style={logStyles.pageButtons}>
							<View style={logStyles.signUp}> 
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
			</KeyboardAwareScrollView>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.authReducer.auth.isAuthenticated,
	name: state.authReducer.auth.username,
	message: state.authReducer.auth.message,
    errorMessage: state.authReducer.auth.errorMessage,
})

const mapDispatchToProps = dispatch =>({
	loginUserAction: (name, password) => dispatch(loginUserAction(name, password)),
	logout: () => dispatch(logoutAction()),
	clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
