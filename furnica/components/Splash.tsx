import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to FurniFind</Text>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Image
          source={require('../assets/images/loader.png')}
          style={styles.imageLoader}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  imageLoader: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default Splash;
