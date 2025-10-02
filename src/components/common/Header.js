import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/common/Header'; // Fixed import path
import AppConfig from '../../services/config';

const HomeScreen = () => {
  console.log('App Config:', AppConfig);
  console.log('Is Development:', AppConfig.isDevelopment);

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to {AppConfig.appName}!</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>
        <View style={styles.configContainer}>
          <Text style={styles.configTitle}>Configuration:</Text>
          <Text style={styles.configItem}>API: {AppConfig.apiBaseUrl}</Text>
          <Text style={styles.configItem}>Version: {AppConfig.version}</Text>
          <Text style={styles.configItem}>Debug: {AppConfig.debugMode ? 'Yes' : 'No'}</Text>
          <Text style={styles.configItem}>Environment: {AppConfig.isDevelopment ? 'Development' : 'Production'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  configContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  configTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  configItem: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
});

export default HomeScreen;