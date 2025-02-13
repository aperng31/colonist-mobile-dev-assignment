import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Pressable, Text } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons';

const Header = () => {
  const [sort, setSort] = useState<'NON' | 'ASC' | 'DES'>('NON');

  const getIconName = () => {
    return sort == 'DES' ? 'sort-desc' : 'sort-asc';
  }

  const handleSortPress = () => {
    if (sort == 'NON') setSort('ASC');
    else if (sort == 'ASC') setSort('DES');
    else setSort('NON');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Users</Text>
      <Pressable
        onPress={handleSortPress}
        style={styles.pressable}
      >
        <Octicons name={getIconName()} size={24} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50, // make this a % of screen
  },
  text: {
    fontSize: 24,
  },
  pressable: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 12,
  }
});

export default Header