import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserCard from './UserCard';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<User[]>([])
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://6799ee3d747b09cdcccd06bc.mockapi.io/api/v1/users')
      setUserData(response.data);
      setLoading(false);
    }

    getUsers();
  }, [])

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading && 
        <FlatList
          data={userData}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={user => user.id}
        />
      }
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

export interface User {
  country: string;
  createdAt: Date;
  id: string;
  userName: string
}