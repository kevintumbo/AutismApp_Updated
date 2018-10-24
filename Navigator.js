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
import SyllabusScreen from "./src/screens/learning/syllabus";

export const Navigator = createStackNavigator({
	login: { screen: LoginScreen, navigationOptions: { header: null }},
	signUp: { screen: RegisterScreen, navigationOptions: { header: null }},
	syllabus: { screen: SyllabusScreen},

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
