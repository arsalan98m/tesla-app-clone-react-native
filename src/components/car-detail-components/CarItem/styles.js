import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  icon: {
    color: '#fff',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    width: 70,
    height: 26,
    marginRight: 12,
    resizeMode: 'contain',
  },

  batteryText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },

  status: {},

  statusText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 175,
  },

  controlsButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});

export default styles;
