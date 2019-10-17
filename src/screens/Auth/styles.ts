import { StyleSheet } from 'react-native';

const primary = 'rgba(239, 136, 38, 0.7)';
const width = 350;
const height = 350;
const padding = 25;
const contentHeigh = 40;
const contentMargin = 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    padding: 10,
    alignSelf:'baseline',
  },
  box: {
    marginVertical: 100,
    height: height,
    width: width,
  },
  boxBackground: {
    backgroundColor: 'white',
    opacity: 0.3,
    position: 'absolute',
    height: height,
    width: width,
  },
  boxFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: padding,
  },
  header: {
    alignItems: 'center',
  },
  divider: {
    marginVertical: contentMargin * 2,
  },
  inputField: {
    maxHeight: 35,
    width: width - contentHeigh,
    flex: 1,
    flexDirection: 'row',
    marginVertical: contentMargin
  },
  icon: {
    height: contentHeigh,
    width: contentHeigh,
    backgroundColor: primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'black',
  },
  input: {
    height: contentHeigh,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: (width - contentHeigh - padding * 2),
    opacity: 0.75,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
  },
  buttonContainer: {
    height: contentHeigh,
    width: (width - padding * 2),
    marginVertical: contentMargin
  },
  button: {
    borderRadius: 10,
    backgroundColor: primary,
  },
  textField: {
    maxHeight: contentHeigh,
    width: (width - padding * 2),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: padding,
  }
});

export default styles;
