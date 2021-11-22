import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/images/logo.png')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Image
          style={styles.menu}
          source={require('../../../../assets/images/menu.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
