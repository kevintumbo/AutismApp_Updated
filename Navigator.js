import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer
  } from 'react-navigation-redux-helpers';

import LoginScreen from "./src/screens/auth/login";
import RegisterScreen from "./src/screens/auth/register";

export const Navigator = createStackNavigator({
	login: { screen: LoginScreen },
	signUp: { screen: RegisterScreen },
}, { initialRouteName: "login" });

export const navReducer = createNavigationReducer(Navigator);

// Configure listener
export const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);

const reduxAppNavigator = reduxifyNavigator(Navigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

export const AppNavigator =  connect(mapStateToProps)(reduxAppNavigator);
