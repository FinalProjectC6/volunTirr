import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomAlert = ({ visible, message, onClose, type = 'error' }) => {
  const translateY = new Animated.Value(windowHeight);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: windowHeight,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return '#0be881';
      case 'warning':
        return '#f9ca24';
      case 'error':
      default:
        return '#ff6b81';
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.alertContainer, { transform: [{ translateY }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={28} color={getIconColor()} />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Ionicons name={type === 'error' ? 'alert-circle' : (type === 'warning' ? 'alert' : 'checkmark-circle')} size={60} color={getIconColor()} />
          </View>
          <Text style={[styles.message, { color: getIconColor() }]}>{message}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    width: windowWidth * 0.8,
    alignItems: 'center',
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  iconContainer: {
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomAlert;
