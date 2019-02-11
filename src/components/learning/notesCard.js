import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types"
import styles from "./styles/notesCard.styles";
import images from "../../assets/images";

const NotesCard = props => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
				style={styles.images}
				source={images[props.question.answer1]}
			/>
        </View>
        <View style={styles.noteContainer}>
            <Text style={styles.note}>
                {props.question.Question}
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.next()}
            >
                <Text style={styles.buttonText}> Next </Text>
            </TouchableOpacity>
        </View>
    </View>
);

NotesCard.propTypes = {
	question: PropTypes.object.isRequired,
};

export default NotesCard;