import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions } from 'react-navigation';


export default class DrawerContainer extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('syllabus')}
                    style={styles.uglyDrawerItem}
                >
                    <Icon
                        name="book"
                        size={40}
                        color="#00ecff"
                    />
                     <Text style={styles.uglyDrawerText}>
                        Syllabus
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('progress')}
                    style={styles.uglyDrawerItem}
                >
                    <Icon
                        name="spinner"
                        size={40}
                        color="#00ecff"
                    />
                    <Text style={styles.uglyDrawerText}>
                        Progress
                    </Text>
                </TouchableOpacity>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingTop: 40,
      paddingHorizontal: 20
    },
    uglyDrawerItem: {
      flexDirection: 'row',
      padding: 15,
      margin: 5,
      borderRadius: 5,
      borderColor:  "#00ecff",
      borderWidth: 4,
    },
    uglyDrawerText:{
        fontSize: 25,
        fontWeight: 'bold',
        color:  "#00ecff",
        textAlign: 'center',
        paddingLeft: 15,
    }
  })
