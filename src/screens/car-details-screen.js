import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CarItem from '../components/car-detail-components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
