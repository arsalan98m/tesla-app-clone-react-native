import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCog,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Menu from '../Menu';

function CarItem() {
  const [locked, setLocked] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.carContainer}>
      {/* Background Image */}
      <ImageBackground
        source={require('../../../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesomeIcon style={styles.icon} icon={faArrowLeft} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tesla</Text>

        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
      </View>

      {/* Battery Section */}
      <View style={styles.batterySection}>
        <Image
          source={require('../../../../assets/images/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlsButton}
            onPress={() => setLocked(!locked)}
          >
            <FontAwesomeIcon
              style={styles.icon}
              icon={locked ? faLock : faUnlockAlt}
              size={24}
            />
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  );
}

export default CarItem;
