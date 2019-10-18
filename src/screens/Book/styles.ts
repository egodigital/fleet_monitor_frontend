import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mapView: {
    flex:1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textBackground: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    fontSize: 24,
    paddingHorizontal: 20,
    color: "#4f9deb",
  },
  mapsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
    color: "#4f9deb",
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 5,
    color: "#4f9deb",
  },
  inputView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom:10,
  },
  inputRow: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    padding: 10,
    marginBottom:20,
  },
  inputPrependIcon: {
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 12,
    backgroundColor: 'black',
    opacity: 0.75,
  },
  input: {
    height: 40,
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    opacity: 0.75,
    fontSize: 24,
  },
  icon: {
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: 'grey',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'black',
  },
  requestBookingButton: {
    marginHorizontal: 50,
    marginVertical: 10,
  }
});

export default styles;
