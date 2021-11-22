import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { useNavigation } from '@react-navigation/native';

function CarItem({ name, tagline, taglineCTA, image }) {
  const navigation = useNavigation();

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content='custom order'
          onPress={() => navigation.navigate('Detail')}
        />

        <StyledButton
          type='secondary'
          content='existing inventory'
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    </View>
  );
}

export default CarItem;
