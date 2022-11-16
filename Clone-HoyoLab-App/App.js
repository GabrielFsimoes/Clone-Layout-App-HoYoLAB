import {  Platform, StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/views/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar  translucent backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
