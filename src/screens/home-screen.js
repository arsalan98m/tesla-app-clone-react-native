import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from '../components/home-components/CarsList';
import Header from '../components/home-components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
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
