import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  icon: {
    color: '#fff',
  },
  menuTextBox: {
    flexGrow: 1,
    marginLeft: 15,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  arrowIcon: {
    color: '#4d4d4e',
  },

  subTitle: {
    color: 'gray',
    fontSize: 14,
  },
});

export default styles;
