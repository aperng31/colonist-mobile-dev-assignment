import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState([])
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://6799ee3d747b09cdcccd06bc.mockapi.io/api/v1/users')
      setUserData(response.data);
    }

    getUsers();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
