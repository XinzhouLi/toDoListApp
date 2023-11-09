import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./Navbar";

export default function App() {
  return (
    <View style={styles.container}>
        <Navbar/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> hello world</Text>
      <StatusBar style="auto" />
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
