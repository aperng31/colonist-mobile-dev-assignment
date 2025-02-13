import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Pressable, Text } from "react-native"
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  sort: 'NON' | 'ASC' | 'DES';
  getIconName: () => string;
  handleSortPress: () => void;
}
const Header = ({ sort, getIconName, handleSortPress}: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Users</Text>
      <Pressable
        onPress={handleSortPress}
        style={[styles.pressable, sort != 'NON' && styles.noSort ]}
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
    padding: 12,
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
  noSort: {
    borderColor: 'gray',
  }
});

export default Header