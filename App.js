import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Define color constants
const COLORS = {
  containerBg: '#f0f0f0',
  headerBg: '#3498db',
  white: 'white',
  darkText: '#2c3e50',
  greyText: '#7f8c8d',
  goalText: '#34495e',
  shadow: '#000',
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to CPAN 213</Text>
          <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.greeting}>Hello, I'm [Randolf Nd'ungu]!</Text>
          <Text style={styles.info}>Student ID: [N01697788]</Text>
          <Text style={styles.info}>
            Program: [Computer programming and analysis]
          </Text>
          <View style={styles.goals}>
            <Text style={styles.sectionTitle}>My Course Goals:</Text>
            <Text style={styles.goal}>• Learn React Native fundamentals</Text>
            <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
            <Text style={styles.goal}>
              • Master state management with Redux
            </Text>
            <Text style={styles.goal}>• Deploy apps to app stores</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.containerBg,
  },
  header: {
    backgroundColor: COLORS.headerBg,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.darkText,
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: COLORS.greyText,
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkText,
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    color: COLORS.goalText,
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default App;
