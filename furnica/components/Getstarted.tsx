import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Getstarted() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
