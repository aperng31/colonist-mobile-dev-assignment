import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserCard from './components/UserCard';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Footer from './components/Footer';
import Header from './components/Header';

const PAGINATION_COUNT = 20

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);

  
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://6799ee3d747b09cdcccd06bc.mockapi.io/api/v1/users')
      setUserData(response.data);
      setLoading(false);
    }

    getUsers();
  }, [])

  // don't need this function if fetch occurs on arrow click because all data from response would be used
  const paginateData = (data: User[], page: number) => {
    if (page * PAGINATION_COUNT > data.length) {
      return data.slice((page - 1) * PAGINATION_COUNT);
    } else {
      return data.slice((page - 1) * PAGINATION_COUNT, page * PAGINATION_COUNT);
    }
  }

  const handleNextPage = () => {
    if (page * PAGINATION_COUNT < userData.length) setPage(page + 1)
  }
  
  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {loading && <Text>Loading...</Text>}
        {!loading && 
          (
            <View style={styles.container}>
              <Header />
              <FlatList
              data={paginateData(userData, page)}
              renderItem={({ item }) => <UserCard user={item} />}
              keyExtractor={user => user.id}
              style={styles.flatList}
              // contentContainerStyle={{gap: 8}}
              // ItemSeparatorComponent={() => (
                //   <View style={{ backgroundColor: "green", height: 1 }} />
                // )}
                />
              <Footer page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage}/>
            </View>
          )
        }
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  flatList: {
    width: '100%',
  }
});

export interface User {
  country: string;
  createdAt: Date;
  id: string;
  userName: string
}