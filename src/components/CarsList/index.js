import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import { cars } from '../../utils/index';
import CartItem from '../CarItem';

function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <CartItem {...item} />}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
