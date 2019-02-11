import { StyleSheet } from 'react-native';
import RF from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from '../../../utility/dimensions';

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP('100%'),
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    marginTop: '4%',
    width: widthPercentageToDP('100%'),
  },
  question: {
    textAlign: 'center',
    fontSize: RF(12),
    fontWeight: '400',
    fontFamily: 'Quite Magical - TTF',
    color: '#00ecff',
  },
  buttonAndImageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  buttonAndImageContainer1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  buttonAndImageContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  button: {
    width: '50%',
    backgroundColor: '#00ecff',
    borderRadius: 15,
    paddingTop: '3%',
    paddingBottom: '3%',
    alignItems: 'center',
    marginBottom: '1%',
  },
  buttonText: {
    fontFamily: 'Quite Magical - TTF',
    color: '#fff',
    fontWeight: '400',
    fontSize: RF(7),
  },
  images: {
    width: widthPercentageToDP('21%'),
    height: widthPercentageToDP('21%'),
  },
});

export default styles;
