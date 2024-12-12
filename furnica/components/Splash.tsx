import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

const Splash = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation loop for the loader movement
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -20,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  return (
    <View style={styles.container}>
      {/* Centered Text */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Furnica</Text>
      </View>
      {/* Animated Image Loader */}
      <View style={styles.loaderContainer}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <Image
            source={require('../assets/images/loader.png')}
            style={styles.imageLoader}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  imageLoader: {
    width: 40,
    height: 40,
  },
});

export default Splash;
