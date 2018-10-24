import React, { Component } from "react";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import AwesomeAlert from "react-native-awesome-alerts"
import validator from "../../utility/validation";
import { signUpAction } from "../../store/modules/auth";
import styles from "./styles/register.styles";

class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
            showAlert: false,
            isLoggedIn: false,
            message: null,
			name: {
				value: "",
				valid: false,
				validationRules: {
					isName: true,
				},
			},
			email: {
				value: "",
				valid: false,
				validationRules: {
					isEmail: true,
				},
			},
			password: {
				value: "",
				valid: false,
				validationRules: {
					minLength: 6,
				},
			},
		};
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log(props);
        if(props.message) {
            return {
                ...state,
                showAlert: true,
                message: props.message,
            }
        }
        return null;
    }

	Login = () => {
		this.props.navigation.navigate('login');
	};

	updateInputState = (key, value) => {
		this.setState(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				value,
				valid: validator(value, prevState[key].validationRules),
			},
		}));
	};

	SignUp = () => {
        const name = this.state.name.value;
        const password = this.state.password.value;
        this.props.signUpAction(name, password);
        if (this.props.message === 'Congratulations. You can now login.'){
            this.props.navigation.navigate('login');
        }
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
    
    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
    
    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

	render() {
		return (
			<View style={styles.container}>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="Hi there."
                    message={this.state.message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    confirmButtonColor="#DD6B55"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
				<Text
					style={styles.heading}
				>
					Autism Learning Application
				</Text>
				<View style={styles.inputView}>
					<TextInput
						style={styles.textInput}
						placeholder="John Smith"
						value={this.state.name.value}
						onChangeText={val => this.updateInputState("name", val)}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="johnsmith@gmail.com"
						value={this.state.email.value}
						onChangeText={val => this.updateInputState("email", val)}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						value={this.state.password.value}
						onChangeText={val => this.updateInputState("password", val)}
					/>
					
				</View>
                <View style={styles.pageButtons}>
                    <View style={styles.signUp}> 
						<Text style={styles.text}>
                            Already have an Account? Log In.
						</Text>
						<TouchableOpacity
							onPress={this.Login}
							style={styles.button}
						>
							<Text style={styles.buttonText}> Log in </Text>
						</TouchableOpacity>
					</View>
                    <View style={styles.loginButton}> 
						<TouchableOpacity
							onPress={this.SignUp}
							style={styles.button}
						>
							<Text style={styles.buttonText}> Create Account </Text>
						</TouchableOpacity>
					</View>
                </View>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpAction: (name, password) => dispatch(signUpAction(name, password)),
});

const mapStateToProps = state => ({
    message: state.authReducer.auth.message,
    errorMessage: state.authReducer.auth.errorMessage,
    error: state.authReducer.auth.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
