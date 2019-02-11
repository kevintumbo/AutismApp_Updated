import React from "react";
import { connect } from "react-redux";
import { Text, Button, View } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer
  } from 'react-navigation-redux-helpers';

import LoginScreen from "./src/screens/auth/login";
import RegisterScreen from "./src/screens/auth/register";
import SyllabusScreen from "./src/screens/learning/syllabus";
import SyllabusProgressScreen from "./src/screens/progress/syllabusProgress";
import UnitProgressScreen from "./src/screens/progress/unitProgress";
import UnitScreen from "./src/screens/learning/unit";
import QuestionScreen from "./src/screens/learning/question";
import DrawerContainer from "./src/components/drawer/DrawerContainer";
import styles from "./Navigator.styles";

// login stack
const loginStack = createStackNavigator({
	login: { screen: LoginScreen, navigationOptions: { header: null }},
	signUp: { screen: RegisterScreen, navigationOptions: { header: null }},
});

// drawer stack
const DrawerStack = createDrawerNavigator({
	syllabus: { screen: SyllabusScreen},
	progress: { screen: SyllabusProgressScreen},
  }, {
	gesturesEnabled: false,
	contentComponent: DrawerContainer
  });

// question stack
const questionNavigation = createStackNavigator({
	unit: { screen: UnitScreen, navigationOptions: { header: null } },
	question: { screen: QuestionScreen, navigationOptions: { header: null } },
 });

// progress stack
const progressNavigation = createStackNavigator({ 
	unitProgress: { screen: UnitProgressScreen, navigationOptions: { header: null } },
});

const DrawerNavigation = createStackNavigator({
	DrawerStack: { screen: DrawerStack }
}, {
	navigationOptions: ({navigation}) => ({
		headerLeft: <Text style={ styles.drawerMenu } onPress={() => navigation.toggleDrawer()}>Menu</Text>,
		title:   `Hello ${navigation.state.params.name}`,
		headerTitleStyle: {
			color: "#00ecff",
			width: '100%',
			textAlign: 'center',
			alignSelf:'center',
			fontSize: 45,
			fontWeight: "400",
			fontFamily: 'Quite Magical - TTF',
		  },
		  headerRight: 
			<Button
			  onPress={navigation.state.params.signOut}
			  title="logout"
			/>
	  })
});

export const Navigator = createStackNavigator({
	loginStack: { screen: loginStack, navigationOptions: { header: null } },
	drawerStack: { screen: DrawerNavigation, navigationOptions: { header: null }},
	questionStack: { screen: questionNavigation },
	progressStack: { screen: progressNavigation },

}, { initialRouteName: "loginStack" });

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
