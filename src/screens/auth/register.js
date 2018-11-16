import React, { Component } from "React";
import { Alert, TouchableOpacity, Text, TextInput, View, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { signUpAction, clearErrors } from "../../store/modules/auth";
import styles from "./styles/register.styles";
import validate from "../../utility/formValidation";

class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            usernameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
		}
		this.signUp = this.signUp.bind(this);
	}

	componentDidUpdate(prevProps) {
		if(this.props.message !== prevProps.message)
			this.showAlert(this.props.message);
	  	}
	
	showAlert = message =>{
		Alert.alert(
			message
		);
	 }

    updateInputState = (key, value) => {
        this.setState(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };

    login = () => {
		this.props.navigation.navigate('login');
    };
    
    async signUp() {
        const usernameError = validate('username', this.state.username);
        const emailError = validate('email', this.state.email);
		const passwordError = validate('password', this.state.password);

        this.setState({
            usernameError: usernameError,
            emailError: emailError,
            passwordError: passwordError,
        })

        if (!usernameError && !emailError && !passwordError) {
            const username = this.state.username;
            const password = this.state.password;
			await this.props.signUpAction(username, password);
        }
    };

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View style={styles.container}>
					<View style={styles.inputView}>
						<View style={styles.header}>
							<Text
								style={styles.heading}
							>
								Autism Learning App
							</Text>
						</View>
						<View>
							<TextInput
								style={styles.textInput}
								placeholder="John Smith"
								value={this.state.username}
								onChangeText={val => this.updateInputState("username", val)}
								onBlur={() => {
									this.setState({
										usernameError: validate('username', this.state.username)
									})
								}}
							/>
                            <Text style={styles.errorText}>{this.state.usernameError}</Text>
							<TextInput
								style={styles.textInput}
								placeholder="johnsmith@gmail.com"
								value={this.state.email}
								onChangeText={val => this.updateInputState("email", val)}
								onBlur={() => {
									this.setState({
										emailError: validate('email', this.state.email)
									})
								}}
							/>
                            <Text style={styles.errorText}>{this.state.emailError}</Text>
							<TextInput
								style={styles.textInput}
								placeholder="Password"
								value={this.state.password}
								onChangeText={val => this.updateInputState("password", val)}
								onBlur={() => {
									this.setState({
	 									passwordError: validate('password', this.state.password)	
									})
								}}
                                secureTextEntry={true}
							/>
                            <Text style={styles.errorText}>{this.state.passwordError}</Text>
						</View>
						<View>
							<Text style={styles.text}>
								Already have an Account? Log In.
							</Text>
						</View>
						<View style={styles.pageButtons}>
							<View style={styles.signUp}> 
								<TouchableOpacity
									onPress={this.login}
									style={styles.button}
								>
									<Text style={styles.buttonText}> Log in </Text>
								</TouchableOpacity>
							</View>
							<View style={styles.loginButton}> 
								<TouchableOpacity
									onPress={this.signUp}
									style={styles.button}
								>
									<Text style={styles.buttonText}> Create Account </Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpAction: (name, password) => dispatch(signUpAction(name, password)),
    clearErrors: () => dispatch(clearErrors()),
});

const mapStateToProps = state => ({
    message: state.authReducer.auth.message,
    errorMessage: state.authReducer.auth.errorMessage,
    error: state.authReducer.auth.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);