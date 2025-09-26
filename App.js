import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
