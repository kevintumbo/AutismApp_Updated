import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types"
import styles from "./styles/notesCard.styles";
import images from "../../assets/images";

const NotesCard = props => (
    <View style={styles.container}>
        <View>
            <Image
				style={styles.images}
				source={images[props.question.answer1]}
			/>
        </View>
        <View style={styles.notesContainer}>
            <Text style={styles.note}>
                {props.question.Question}
            </Text>
        </View>
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.next()}
            ></TouchableOpacity>
        </View>
    </View>
);

NotesCard.propTypes = {
	question: PropTypes.object.isRequired,
	attemptAnswer: PropTypes.func.isRequired,
};

export default NotesCard;