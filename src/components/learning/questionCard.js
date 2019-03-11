import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/questionCard.styles';
import images from '../../assets/images';

const QuestionCard = props => (
  <View style={styles.container}>
    <View style={styles.questionContainer}>
      <Text style={styles.question}>
        {props.question.Question}
      </Text>
    </View>
    <View style={styles.buttonAndImageContainer}>
      <View style={styles.buttonAndImageContainer1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.attemptAnswer(props.question.right_answer, props.question.answer1)}
        >
          <Text style={styles.buttonText}> {props.question.answer1} </Text>
        </TouchableOpacity>
        <Image
          style={styles.images}
          source={images[props.question.answer1]}
        />
      </View>
      <View style={styles.buttonAndImageContainer2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.attemptAnswer(props.question.right_answer, props.question.answer2)}
        >
          <Text style={styles.buttonText}> {props.question.answer2} </Text>
        </TouchableOpacity>
        <Image
          style={styles.images}
          source={images[props.question.answer2]}
        />
      </View>
    </View>
  </View>
);


QuestionCard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  attemptAnswer: PropTypes.func.isRequired,
};

export default QuestionCard;
