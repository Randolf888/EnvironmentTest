import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/common/Header';
import Colors from '../../constants/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to my app !</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>
        <Text style={styles.nameText}>Name: Randolf Ndungu</Text>
        <Text style={styles.nameText}>STUDENT ID: N01697788</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  nameText: {
    fontSize: 18,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
