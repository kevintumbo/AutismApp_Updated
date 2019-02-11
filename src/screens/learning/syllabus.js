import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSyllabus } from '../../store/modules/syllabus';
import SyllabusOutput from '../../components/learning/syllabusList';
import syllabusStyles from './styles/syllabusStyles.styles';

class SyllabusScreen extends Component {
  static propTypes = {
    selectedSyllabus: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      syllabus: [],
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase(
      { name: 'app.db', createFromLocation: '~app.db' },
      this.openCB, this.successCB(), this.errorCB,
    );
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM syllabus', [], (tx, results) => {
        // Get rows with Web SQL Database spec compliance.
        const len = results.rows.length;
        for (let i = 0; i < len; i += 1) {
          const row = results.rows.item(i);
          this.setState(prevState => ({ syllabus: prevState.syllabus.concat(row) }));
        }
      });
    });
  }

  onSelectSyllabus = (syllabusId) => {
    this.props.selectedSyllabus(syllabusId);
    this.props.navigation.navigate('unit');
  };

  errorCB = (err) => {
    console.log(`SQL Error: ${err}`);
  }

  successCB = () => {
    console.log('SQL executed fine');
  }

  openCB = () => {
    console.log('Database OPENED');
  }

  render() {
    const list = this.state.syllabus.map(syllabus => (
      <SyllabusOutput
        key={syllabus.id}
        syllabus={syllabus}
        onPress={() => this.onSelectSyllabus(syllabus.id)}
      />
    ));

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={syllabusStyles.container}>
          <View style={syllabusStyles.syllabusList}>
            <View style={syllabusStyles.syllabusListHeader}>
              <Text style={syllabusStyles.syllabusListHeaderText}>
  Learning App Contents
              </Text>
            </View>
            <View>
              {list}
            </View>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectedSyllabus: (syllabusId) => {
    dispatch(selectSyllabus(syllabusId));
  },
});

export default connect(null, mapDispatchToProps)(SyllabusScreen);
